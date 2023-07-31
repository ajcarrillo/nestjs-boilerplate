import { Controller, Get, Query } from "@nestjs/common"
import { BudgetDetailsMonthService } from "./budget-details-month.service"
import { FilterBudgetDetailDto } from "./dto"

@Controller('budget-details-month')
export class BudgetDetailsMonthController {
  constructor(
    private readonly budgetDetailsMonthService: BudgetDetailsMonthService,
  ) {}

  @Get()
  filterBy(@Query() query: FilterBudgetDetailDto) {
    return this.budgetDetailsMonthService.filterBy(query)
  }
}
