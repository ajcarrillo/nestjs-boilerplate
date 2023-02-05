import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateBudgetDetailDto } from "./dto/create-budget-detail.dto"
import { UpdateBudgetDetailDto } from "./dto/update-budget-detail.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { BudgetDetail } from "../entities"
import { Repository } from "typeorm"

@Injectable()
export class BudgetDetailsService {

  constructor(
    @InjectRepository(BudgetDetail)
    private readonly budgetDetailRepository: Repository<BudgetDetail>,
  ) {
  }

  async create(createBudgetDetailDto: CreateBudgetDetailDto) {
    const budgetDetail = this.budgetDetailRepository.create(createBudgetDetailDto)

    return await this.budgetDetailRepository.save(budgetDetail)
  }

  async findAll() {
    return await this.budgetDetailRepository.find()
  }

  async findOne(id: number) {
    return `This action returns a #${id} budgetDetail`;
  }

  async update(id: number, updateBudgetDetailDto: UpdateBudgetDetailDto) {
    const { ...budgetDetail } = updateBudgetDetailDto

    const budgetDetailToUpdate = await this.budgetDetailRepository.preload({
      id,
      ...budgetDetail,
    })

    if (!budgetDetailToUpdate) {
      throw new NotFoundException(`El detalle de presupuesto con el id ${id} no existe`)
    }

    return await this.budgetDetailRepository.save(budgetDetailToUpdate)
  }

  async remove(id: number) {
    return `This action removes a #${id} budgetDetail`;
  }
}
