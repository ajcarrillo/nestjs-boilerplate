import { PartialType } from "@nestjs/mapped-types"
import { CreateBudgetCapDto } from "./create-budget-cap.dto"

export class UpdateBudgetCapDto extends PartialType(CreateBudgetCapDto) {}
