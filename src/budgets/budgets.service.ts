import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateBudgetDto } from "./dto/create-budget.dto"
import { UpdateBudgetDto } from "./dto/update-budget.dto"
import { Budget } from "./entities"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { isUUID } from "class-validator"

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {
  }

  async create(createBudgetDto: CreateBudgetDto) {
    const budget = this.budgetRepository.create(createBudgetDto)

    return await this.budgetRepository.save(budget)
  }

  async findAll() {
    return await this.budgetRepository.find()
  }

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException(`El id ${id} no es un UUID válido`)
    }

    return await this.budgetRepository.findOne({
      where: {
        id,
      },
      relations: ["details", "details.article", "details.action", "details.line", "details.department" ],
    })
  }

  async update(id: string, updateBudgetDto: UpdateBudgetDto) {
    const { ...budget } = updateBudgetDto

    const budgetToUpdate = await this.budgetRepository.preload({
      id,
      ...budget,
    })

    if (!budgetToUpdate) {
      throw new NotFoundException(`El presupuesto con el id ${id} no existe`)
    }

    return await this.budgetRepository.save(budgetToUpdate)
  }

  async remove(id: number) {
    return `This action removes a #${id} budget`
  }
}
