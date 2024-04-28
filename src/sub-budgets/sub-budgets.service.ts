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
import { RequisitionSubBudget } from "./entities/requisition-sub-budget.entity";
import { PurchaseOrder } from "../purchase-orders/entities";
import { PaymentOrder } from "../payment-orders/entities";
import { SubBudgetSummaryView } from "./entities"
import { BudgetsService } from "src/budgets/budgets.service"
import { Budget } from "../budgets/entities";


@Injectable()
@Auth()
export class SubBudgetsService {
  constructor(
    @InjectRepository(SubBudget)
    private readonly subBudgetsRepository: Repository<SubBudget>,
    @InjectRepository(SubBudgetSummaryView)
    private readonly subBudgetsSummaryRepository: Repository<SubBudgetSummaryView>,
    private readonly actionsService: ActionsService,
    private readonly linesService: LinesService,
    private readonly departmentsService: AreasService,
    private readonly budgetsService: BudgetsService,
  ) {
  }

  async getSavings(budgetYear: string) {
    return await this.subBudgetsRepository
      .createQueryBuilder("sb")
      .select([
        "sb.id AS sub_budget_id",
        "a.name AS action",
        "l.name AS line",
        "ar.description AS area",
        "sb.event",
        "sb.amount",
        "SUM(payo.amount) AS total_paid",
        "sb.amount - SUM(payo.amount) AS savings",
      ])
      .innerJoin("sb.action", "a")
      .innerJoin("sb.line", "l")
      .innerJoin("sb.department", "ar")
      .innerJoin(RequisitionSubBudget, "rsb", "sb.id = rsb.subBudget")
      .innerJoin(PurchaseOrder, "po", "rsb.id = po.requisition_id")
      .innerJoin(PaymentOrder, "payo", "po.id = payo.purchaseOrder")
      .innerJoin(Budget, "b", "sb.budget = b.id")
      .where("po.requisitionType = :requisitionType", {
        requisitionType: "RequisitionSubBudgetEntity",
      })
      .where("b.year = :budgetYear", { budgetYear })
      .groupBy("sb.id, l.name, a.name, ar.description")
      .getRawMany();
  }

  async create(createSubBudgetDto: CreateSubBudgetDto, user: User) {
    const { action_id, line_id, department_id, budget_year } = createSubBudgetDto

    const { action, line, department, budget } = await this.findResources(action_id, line_id, department_id, budget_year)

    const subBudget = this.subBudgetsRepository.create({
      ...createSubBudgetDto,
      action,
      line,
      department,
      createdBy: user.id,
      budget
    })

    return await this.subBudgetsRepository.save(subBudget)
  }

  async findAll(budget_year: string) {
    return await this.subBudgetsSummaryRepository.find({
      relations: [
        "adjustmentsFrom",
        "adjustmentsTo",
        "adjustmentsFrom.targetSubBudget",
        "adjustmentsFrom.sourceSubBudget",
        "adjustmentsTo.targetSubBudget",
        "adjustmentsTo.sourceSubBudget",
        "budget"
      ],
      where: {
        budget: {
          year: +budget_year
        }
      }
    })
  }

  async findOne(id: string) {
    return await this.subBudgetsRepository.findOneBy({ id })
  }

  async update(id: string, updateSubBudgetDto: UpdateSubBudgetDto, user: User) {
    const { ...subBudget } = updateSubBudgetDto
    const { action_id, line_id, department_id, budget_year } = updateSubBudgetDto
    const { action, line, department } = await this.findResources(action_id, line_id, department_id, budget_year)

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

  private async findResources(action_id: number, line_id: number, department_id: string, budget_id: number) {
    const action = await this.actionsService.findOne(action_id)
    const line = await this.linesService.findOne(line_id)
    const department = await this.departmentsService.findOne(department_id)
    const budget = await this.budgetsService.findByYear(budget_id)

    return { action, line, department, budget }
  }
}
