import { IsArray, IsNumber, IsObject, IsString } from "class-validator"

interface GeneralDictionary {
  value: string|number
  label: string
}

interface BudgetMonth {
  quantity: number
  month: string
  budget_detail_id: string
}

export class CreateBudgetDetailDto {
  @IsObject()
  action: GeneralDictionary

  @IsObject()
  line: GeneralDictionary

  @IsObject()
  area: GeneralDictionary

  @IsObject()
  article: GeneralDictionary

  @IsNumber()
  estimated_amount: number

  @IsString()
  justification: string

  @IsArray()
  month: string[]

  @IsNumber()
  total: number

  @IsArray()
  budgetMonths: BudgetMonth[]
}
