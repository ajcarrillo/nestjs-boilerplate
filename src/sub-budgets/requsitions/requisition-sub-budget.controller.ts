import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { Auth, GetUser } from "../../auth/decorators"
import { RequisitionSubBudgetService } from "./requisition-sub-budget.service"
import { CreateRequisitionSubBudgetDto } from "./dto/create-requisition-sub-budget.dto"
import { User } from "../../auth/entities"

@Controller("sub-budgets")
@Auth()
export class RequisitionSubBudgetController {
  constructor(
    private readonly requisitionSubBudgetService: RequisitionSubBudgetService,
  ) {
  }

  @Post(":id/requisitions")
  create(
    @Param("id") id: string,
    @Body() createRequisitionSubBudgetDto: CreateRequisitionSubBudgetDto,
    @GetUser() user: User,
  ) {
    return this.requisitionSubBudgetService.create(id, createRequisitionSubBudgetDto, user)
  }

  @Get("requisitions/dictionary")
  getDictionary() {
    return this.requisitionSubBudgetService.getDictionary()
  }
}
