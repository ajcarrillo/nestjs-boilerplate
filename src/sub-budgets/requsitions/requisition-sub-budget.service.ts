import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { RequisitionSubBudget } from "../entities/requisition-sub-budget.entity"
import { Repository } from "typeorm"
import { CreateRequisitionSubBudgetDto } from "./dto/create-requisition-sub-budget.dto"
import { User } from "../../auth/entities"
import { SubBudgetsService } from "../sub-budgets.service"
import { AreasService } from "../../employees/areas/areas.service"

@Injectable()
export class RequisitionSubBudgetService {
  constructor(
    @InjectRepository(RequisitionSubBudget)
    private readonly requisitionSubBudgetRepository: Repository<RequisitionSubBudget>,
    private readonly subBudgetService: SubBudgetsService,
    private readonly areaService: AreasService,
  ) {
  }

  async create(id: string, createRequisitionSubBudgetDto: CreateRequisitionSubBudgetDto, user: User) {
    const requisitionSubBudget = this.requisitionSubBudgetRepository.create({
      ...createRequisitionSubBudgetDto,
      subBudget: await this.subBudgetService.findOne(id),
      area: await this.areaService.findOne(createRequisitionSubBudgetDto.area_id),
      createdBy: user.id,
    })

    return this.requisitionSubBudgetRepository.save(requisitionSubBudget)
  }

  async findOne(id: string) {
    return await this.requisitionSubBudgetRepository.findOneBy({ id })
  }

  async getDictionary() {
    const items = await this.requisitionSubBudgetRepository.find({
      relations: ["subBudget"],
    })

    return items.map(item => ({
      id: item.id,
      requisition_number: item.requisition_number,
      area_description: item.area.alias,
      event: item.subBudget.event,
    }))
  }
}
