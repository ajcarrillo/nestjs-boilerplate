import { IsBoolean, IsIn, IsNumber, IsOptional, IsString, ValidateIf } from "class-validator";

export class UpdateBudgetDetailMonthDto {
  @IsNumber()
  budget_detail_id: number;

  @IsNumber()
  quantity: number;

  @IsIn([
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ])
  month: string;

  @ValidateIf(o => o.authorized_quantity !== null)
  @IsNumber()
  authorized_quantity: number | null;

  @IsBoolean()
  @IsOptional()
  authorized: boolean;
}
