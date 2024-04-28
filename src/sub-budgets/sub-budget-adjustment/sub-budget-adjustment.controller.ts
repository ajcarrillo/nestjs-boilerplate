import { Body, Controller, Get, Post } from "@nestjs/common";
import { SubBudgetAdjustmentService } from "./sub-budget-adjustment.service";
import { CreateSubBudgetAdjustmentDto } from "../dto";
import { Auth, GetUser } from "../../auth/decorators";
import { User } from "../../auth/entities";
import { BudgetYear } from "../../common/decorators";

@Controller("sub-budget-adjustment")
@Auth()
export class SubBudgetAdjustmentController {
  constructor(
    private readonly subBudgetAdjustmentService: SubBudgetAdjustmentService
  ) {
  }

  @Get()
  findAll(@BudgetYear() budgetYear: string) {
    return this.subBudgetAdjustmentService.findAll(budgetYear);
  }

  @Post()
  create(
    @BudgetYear() budgetYear: string,
    @Body() createSubBudgetAdjustmentDto: CreateSubBudgetAdjustmentDto,
    @GetUser() user: User
  ) {
    return this.subBudgetAdjustmentService.create(createSubBudgetAdjustmentDto, user, budgetYear);
  }
}
