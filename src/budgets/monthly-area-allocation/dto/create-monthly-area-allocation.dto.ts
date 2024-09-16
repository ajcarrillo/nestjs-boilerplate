import {
  IsUUID,
  IsInt,
  Min,
  Max,
  IsNotEmpty,
  Matches,
  IsNumberString,
} from "class-validator"

export class CreateMonthlyAreaAllocationDto {
  @IsUUID("4")
  @IsNotEmpty()
  areaId: string

  @IsInt()
  @Min(1)
  @Max(12)
  month: number

  @IsInt()
  @Min(2000)
  @Max(2100)
  year: number

  @IsNumberString()
  @Matches(/^\d+(\.\d{1,2})?$/, {
    message:
      "allocatedAmount must be a valid number with up to two decimal places",
  })
  allocatedAmount: string
}
