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

    const json = await this.budgetRepository.findOne({
      where: {
        id,
      },
      relations: ["details", ],
    })

    return {
      ...json,
      details: json.details.map(detail => {
        const months = detail.months.reduce((acc, month) => {
          acc[month.month] = {
            "id": month.id,
            "budget_detail_id": month.budget_detail_id,
            "month": month.month,
            "quantity": month.quantity,
            "authorized_quantity": month.authorized_quantity,
            "total": detail.estimated_amount * month.quantity,
          };
          return acc;
        }, {});
        delete detail.months;
        return { ...detail, ...months };
      })
    };
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
