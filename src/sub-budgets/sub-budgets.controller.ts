import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common"
import { SubBudgetsService } from "./sub-budgets.service"
import { CreateSubBudgetDto, SubBudgetsDictionaryDto, UpdateSubBudgetDto } from "./dto"
import { Auth, GetUser } from "../auth/decorators"
import { User } from "../auth/entities"
import { BudgetYear } from "../common/decorators";

@Controller('sub-budgets')
@Auth()
export class SubBudgetsController {
  constructor(private readonly subBudgetsService: SubBudgetsService) {}

  @Post()
  create(
    @Body() createSubBudgetDto: CreateSubBudgetDto,
    @GetUser() user: User,
  ) {
    return this.subBudgetsService.create(createSubBudgetDto, user);
  }

  @Get()
  findAll(@Query("budget") budget: string) {
    return this.subBudgetsService.findAll(budget);
  }

  @Get('dictionary')
  getDictionary(@Query() subBudgetsDictionaryDto: SubBudgetsDictionaryDto) {
    return this.subBudgetsService.getDictionary(subBudgetsDictionaryDto);
  }

  @Get('savings')
  getSavings(@BudgetYear() budgetYear: string) {
    return this.subBudgetsService.getSavings(budgetYear);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subBudgetsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubBudgetDto: UpdateSubBudgetDto,
    @GetUser() user: User
  ) {
    return this.subBudgetsService.update(id, updateSubBudgetDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subBudgetsService.remove(id);
  }
}
