import { IsOptional, IsString } from "class-validator"

export class FilterBudgetDetailDto {
  @IsString()
  @IsOptional()
  area?: string

  @IsString()
  @IsOptional()
  month?: string
}
