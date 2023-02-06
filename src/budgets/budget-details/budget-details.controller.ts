import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common"
import { BudgetDetailsService } from "./budget-details.service"
import { CreateBudgetDetailDto, UpdateBudgetDetailDto } from "./dto"

@Controller('budgets/:budgetId/budget-details')
export class BudgetDetailsController {
  constructor(private readonly budgetDetailsService: BudgetDetailsService) {}

  @Post()
  create(@Param('budgetId') budgetId: string, @Body() createBudgetDetailDto: CreateBudgetDetailDto) {
    return this.budgetDetailsService.create(budgetId, createBudgetDetailDto);
  }

  @Get()
  findAll() {
    return this.budgetDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDetailDto: UpdateBudgetDetailDto) {
    return this.budgetDetailsService.update(+id, updateBudgetDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetDetailsService.remove(+id);
  }
}
