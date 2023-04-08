import { IsNumber } from "class-validator"


export class UpdateBudgetDetailDto {
  @IsNumber()
  estimated_amount: number

  @IsNumber()
  total: number
}
