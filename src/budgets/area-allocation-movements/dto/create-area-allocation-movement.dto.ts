import { IsNumberString, Matches, IsOptional, IsString } from "class-validator"

export class CreateAreaAllocationMovementDto {
  @IsNumberString()
  @Matches(/^[-+]?\d+(\.\d{1,2})?$/, {
    message:
      "Amount must be a valid number with up to two decimal places, and can be positive or negative",
  })
  amount: string

  @IsOptional()
  @IsString()
  description?: string
}
