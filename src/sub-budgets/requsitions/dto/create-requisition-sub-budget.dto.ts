import { IsDateString, IsString, IsUUID, MaxLength, MinLength } from "class-validator"

export class CreateRequisitionSubBudgetDto {
  @IsString()
  @MinLength(3)
  @MaxLength(3)
  requisition_number: string

  @IsDateString()
  preparation_date: string

  @IsDateString()
  processing_date: string

  @IsString()
  estimated_amount: string | number

  @IsString()
  @IsUUID()
  area_id: string

  @IsString()
  @IsUUID()
  sub_budget_id: string
}
