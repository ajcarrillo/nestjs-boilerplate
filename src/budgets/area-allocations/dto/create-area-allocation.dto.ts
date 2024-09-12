import { IsUUID, IsNumber, IsOptional } from "class-validator"

export class CreateAreaAllocationDto {
  @IsUUID()
  areaId: string

  @IsUUID()
  budgetCapId: string

  @IsNumber({ maxDecimalPlaces: 2 })
  percentage: number

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  directAllocation?: number
}
