import { Injectable } from "@nestjs/common"
import { CreateBudgetDetailDto, UpdateBudgetDetailDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { BudgetDetail } from "../entities"
import { Repository } from "typeorm"
import { BudgetDetailMonth } from "../entities/budget-detail-month.entity"

@Injectable()
export class BudgetDetailsService {

  constructor(
    @InjectRepository(BudgetDetail)
    private readonly budgetDetailRepository: Repository<BudgetDetail>,
    @InjectRepository(BudgetDetailMonth)
    private readonly budgetDetailMonthRepository: Repository<BudgetDetailMonth>,
  ) {
  }

  async create(budgetId:string, createBudgetDetailDto: CreateBudgetDetailDto) {

    const { action, line, area, article, budgetMonths, ...budgetDetails  } = createBudgetDetailDto

    const { value: action_id } = action
    const { value: line_id } = line
    const { value: department_id } = area
    const { value: article_id } = article

    const budgetDetail = this.budgetDetailRepository.create({
      ...budgetDetails,
      budget_id: budgetId,
      action_id: Number(action_id),
      line_id: Number(line_id),
      department_id: department_id.toString(),
      article_id: Number(article_id),
      months: budgetMonths.map((el) => this.budgetDetailMonthRepository.create({
        quantity: el.quantity,
        month: el.month.toLowerCase(),
        budget_detail_id: el.budget_detail_id,
      })),
    })

    return await this.budgetDetailRepository.save(budgetDetail)
  }

  async findAll(budgetId: string) {
    return await this.budgetDetailRepository.find({
      where: {
        budget_id: budgetId,
      }
    })
  }

  async findOne(id: number) {
    return `This action returns a #${id} budgetDetail`;
  }

  async update(id: number, updateBudgetDetailDto: UpdateBudgetDetailDto) {
    return `This action update a #${id} budgetDetail`;
    // const { ...budgetDetail } = updateBudgetDetailDto
    //
    // const budgetDetailToUpdate = await this.budgetDetailRepository.preload({
    //   id,
    //   ...budgetDetail,
    // })
    //
    // if (!budgetDetailToUpdate) {
    //   throw new NotFoundException(`El detalle de presupuesto con el id ${id} no existe`)
    // }
    //
    // return await this.budgetDetailRepository.save(budgetDetailToUpdate)
  }

  async remove(id: number) {
    return `This action removes a #${id} budgetDetail`;
  }
}
