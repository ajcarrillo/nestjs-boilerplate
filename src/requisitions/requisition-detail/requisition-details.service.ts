import { Injectable } from "@nestjs/common"
import { RequisitionDetail } from "../entities"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { CreateRequisitionDetailDto } from "./dto"
import { RequisitionsService } from "../requisitions.service"
import { BudgetDetailsService } from "src/budgets/budget-details/budget-details.service"

@Injectable()
export class RequisitionDetailsService {
  constructor(
    @InjectRepository(RequisitionDetail)
    private requisitionDetailRepository: Repository<RequisitionDetail>,
    private readonly requisitionService: RequisitionsService,
    private readonly budgetDetailService: BudgetDetailsService
  ) {
  }

  async create(requisitionId: string, createRequisitionDetailDto: CreateRequisitionDetailDto) {

    const requisition = await this.requisitionService.findOne(createRequisitionDetailDto.requisition_id)
    const budgetDetail = await this.budgetDetailService.findOne(createRequisitionDetailDto.budget_detail_id)

    const detail = this.requisitionDetailRepository.create({
      ...createRequisitionDetailDto,
      requisition,
      budgetDetail,
    })

    return this.requisitionDetailRepository.save(detail)
  }

  async findAll() {
    return this.requisitionDetailRepository.find()
  }

  async findOne(id: string) {
    return await this.requisitionDetailRepository.findOneBy({ id })
  }
}
