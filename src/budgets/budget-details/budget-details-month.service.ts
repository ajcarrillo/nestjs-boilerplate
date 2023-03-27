import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { BudgetDetailMonth } from "../entities/budget-detail-month.entity"
import { Repository } from "typeorm"
import { FilterBudgetDetailDto } from "./dto"

@Injectable()
export class BudgetDetailsMonthService {
  constructor(
    @InjectRepository(BudgetDetailMonth)
    private readonly budgetDetailMonthRepository: Repository<BudgetDetailMonth>,
  ) {}

  async filterBy(query: FilterBudgetDetailDto) {

    const { month, area } = query
    let items = []

    const budgetDetailMonth = await this.budgetDetailMonthRepository.createQueryBuilder('bdm')
      .innerJoinAndSelect('bdm.budget_detail', 'bd')
      .innerJoinAndSelect('bd.department', 'a')
      .innerJoinAndSelect('bd.article', 'ar')
      .where('bdm.month = :month', { month: month.toLowerCase() })
      .andWhere('a.alias = :alias', { alias: area })
      .getMany()

    items = budgetDetailMonth.map(({
                                     budget_detail: { department, article, estimated_amount, total, id, budget_id },
                                     month,
                                     quantity
                                   }) => ({
      alias: department?.alias,
      description: department?.description,
      month,
      quantity,
      article_description: article?.description,
      estimated_amount,
      total,
      id,
      budget_id
    }));

    return items
  }
}
