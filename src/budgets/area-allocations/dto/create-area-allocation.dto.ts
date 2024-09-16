import { IsUUID, IsNumber } from "class-validator"

export class CreateAreaAllocationDto {
  @IsUUID()
  areaId: string

  @IsUUID()
  budgetCapId: string

  @IsNumber({ maxDecimalPlaces: 2 })
  totalAmount: number
}
