import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateSubBudgetDto, SubBudgetsDictionaryDto, UpdateSubBudgetDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { SubBudget } from "./entities/sub-budget.entity"
import { Repository } from "typeorm"
import { ActionsService } from "../budgets/actions/actions.service"
import { LinesService } from "../budgets/lines/lines.service"
import { AreasService } from "../employees/areas/areas.service"
import { Auth } from "../auth/decorators"
import { User } from "../auth/entities"

@Injectable()
@Auth()
export class SubBudgetsService {
  constructor(
    @InjectRepository(SubBudget)
    private readonly subBudgetsRepository: Repository<SubBudget>,
    private readonly actionsService: ActionsService,
    private readonly linesService: LinesService,
    private readonly departmentsService: AreasService,
  ) {
  }


  async create(createSubBudgetDto: CreateSubBudgetDto, user: User) {
    const { action_id, line_id, department_id } = createSubBudgetDto

    const { action, line, department } = await this.findResources(action_id, line_id, department_id)

    const subBudget = this.subBudgetsRepository.create({
      ...createSubBudgetDto,
      action,
      line,
      department,
      createdBy: user.id,
    })

    return await this.subBudgetsRepository.save(subBudget)
  }

  async findAll() {
    return await this.subBudgetsRepository.find({
      relations: [
        "adjustmentsFrom",
        "adjustmentsTo",
        "adjustmentsFrom.targetSubBudget",
        "adjustmentsFrom.sourceSubBudget",
        "adjustmentsTo.targetSubBudget",
        "adjustmentsTo.sourceSubBudget"
      ],
    })
  }

  async findOne(id: string) {
    return await this.subBudgetsRepository.findOneBy({ id })
  }

  async update(id: string, updateSubBudgetDto: UpdateSubBudgetDto, user: User) {
    const { ...subBudget } = updateSubBudgetDto
    const { action_id, line_id, department_id } = updateSubBudgetDto
    const { action, line, department } = await this.findResources(action_id, line_id, department_id)

    const subBudgetToUpdate = await this.subBudgetsRepository.preload({
      id,
      ...subBudget,
      action,
      line,
      department,
      updatedBy: user.id,
    })

    if (!subBudgetToUpdate) {
      throw new NotFoundException(`El sub presupuesto con el id ${id} no existe`)
    }

    return await this.subBudgetsRepository.save(subBudgetToUpdate)
  }

  remove(id: string) {
    return `This action removes a #${id} subBudget`
  }

  async getDictionary(subBudgetsDictionaryDto: SubBudgetsDictionaryDto) {
    const searchLowerCase = subBudgetsDictionaryDto.search.toLowerCase();

    const subBudgets = await this.subBudgetsRepository.createQueryBuilder('subBudget')
      .where('LOWER(subBudget.event) LIKE :search', {
        search: `%${searchLowerCase}%`,
      })
      .getMany();

    return subBudgets.map(subBudget => ({
        value: subBudget.id,
        label: subBudget.event,
      })
    )
  }

  private async findResources(action_id: number, line_id: number, department_id: string) {
    const action = await this.actionsService.findOne(action_id)
    const line = await this.linesService.findOne(line_id)
    const department = await this.departmentsService.findOne(department_id)

    return { action, line, department }
  }
}
