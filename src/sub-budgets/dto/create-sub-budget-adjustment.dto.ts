import { IsNumber, IsString, IsUUID } from "class-validator"

export class CreateSubBudgetAdjustmentDto {
  @IsUUID()
  source_sub_budget_id:string

  @IsUUID()
  target_sub_budget_id:string

  @IsString()
  justification: string

  @IsNumber()
  amount: number
}
