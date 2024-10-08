import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common"
import { BudgetsService } from "./budgets.service"
import { CreateBudgetDto } from "./dto/create-budget.dto"
import { UpdateBudgetDto } from "./dto/update-budget.dto"
import { Auth } from "../auth/decorators"

@Controller("budgets")
@Auth()
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {
  }

  @Get("dictionary")
  getDictionary() {
    return this.budgetsService.getDictionary()
  }

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetsService.create(createBudgetDto)
  }

  @Get()
  findAll() {
    return this.budgetsService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.budgetsService.findOne(id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetsService.update(id, updateBudgetDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.budgetsService.remove(+id)
  }
}
