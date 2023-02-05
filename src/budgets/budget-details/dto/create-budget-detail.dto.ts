import { IsNumber, IsString } from "class-validator"

export class CreateBudgetDetailDto {
  @IsNumber()
  month

  @IsNumber()
  estimated_amount

  @IsString()
  justification

  @IsNumber()
  quantity

  @IsNumber()
  budget_id

  @IsNumber()
  action_id

  @IsNumber()
  line_id

  @IsNumber()
  department_id

  @IsNumber()
  article_id
}
