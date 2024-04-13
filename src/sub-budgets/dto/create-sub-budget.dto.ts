import { IsBoolean, IsDateString, IsNumber, IsString, IsUUID } from "class-validator"

export class CreateSubBudgetDto {
  @IsNumber()
  action_id: number

  @IsNumber()
  line_id: number

  @IsString()
  @IsUUID()
  department_id: string

  @IsString()
  benefited_population: string

  @IsString()
  objective: string

  @IsNumber()
  cost_per_participant: number

  @IsNumber()
  number_participants: number

  @IsString()
  event: string

  @IsString()
  event_venue: string

  @IsString()
  justification: string

  @IsDateString()
  start_date: string

  @IsDateString()
  end_date: string

  @IsNumber()
  amount: number

  @IsBoolean()
  vat_breakdown: boolean

  @IsString()
  risk: string

  @IsNumber()
  budget_year: number
}
