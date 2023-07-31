import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateBudgetDetailDto, UpdateBudgetDetailDto, UpdateBudgetDetailMonthDto } from "./dto";
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
        budget_detail_id: +el.budget_detail_id,
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
    return await this.budgetDetailRepository.findOneBy({ id })
  }

  async update(id: number, updateBudgetDetailDto: UpdateBudgetDetailDto) {
    const itemToUpdate = await this.budgetDetailRepository.preload({
      id,
      ...updateBudgetDetailDto
    })

    if (!itemToUpdate) {
      throw new NotFoundException(`El sub presupuesto con el id ${id} no existe`)
    }

    return await this.budgetDetailRepository.save(itemToUpdate)
  }

  async remove(id: number) {
    return `This action removes a #${id} budgetDetail`;
  }

  async updateMonth(id: number, budgetDetailId: number, updateBudgetDetailDto: UpdateBudgetDetailMonthDto) {
    if (updateBudgetDetailDto.quantity === 0) {
      await this.budgetDetailMonthRepository.delete(budgetDetailId);
      return;
    }

    const itemToUpdate = await this.budgetDetailMonthRepository.preload({
      id: budgetDetailId,
      ...updateBudgetDetailDto
    })

    if (!itemToUpdate) {
      throw new NotFoundException(`El sub presupuesto con el id ${id} no existe`)
    }

    return await this.budgetDetailMonthRepository.save(itemToUpdate)
  }

  async createMonth(id: number, updateBudgetDetailDto: UpdateBudgetDetailMonthDto) {
    const itemToUpdate = this.budgetDetailMonthRepository.create({
      ...updateBudgetDetailDto
    });

    return await this.budgetDetailMonthRepository.save(itemToUpdate);
  }
}
