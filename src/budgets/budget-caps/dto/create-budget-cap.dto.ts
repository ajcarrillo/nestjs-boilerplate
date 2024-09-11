import { IsNumber, IsPositive } from "class-validator"

export class CreateBudgetCapDto {
  @IsNumber()
  year: number

  @IsNumber()
  @IsPositive()
  totalAmount: number
}
