import { Body, Controller, Post } from "@nestjs/common"
import { SubBudgetAdjustmentService } from "./sub-budget-adjustment.service"
import { CreateSubBudgetAdjustmentDto } from "../dto"
import { Auth, GetUser } from "../../auth/decorators"
import { User } from "../../auth/entities"

@Controller("sub-budget-adjustment")
@Auth()
export class SubBudgetAdjustmentController {
  constructor(
    private readonly subBudgetAdjustmentService: SubBudgetAdjustmentService,
  ) {
  }

  @Post()
  create(
    @Body() createSubBudgetAdjustmentDto: CreateSubBudgetAdjustmentDto,
    @GetUser() user: User,
  ) {
    return this.subBudgetAdjustmentService.create(createSubBudgetAdjustmentDto, user)
  }
}
