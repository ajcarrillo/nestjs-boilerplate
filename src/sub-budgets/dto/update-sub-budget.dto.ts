import { PartialType } from "@nestjs/swagger"
import { CreateSubBudgetDto } from "./create-sub-budget.dto"

export class UpdateSubBudgetDto extends PartialType(CreateSubBudgetDto) {}
