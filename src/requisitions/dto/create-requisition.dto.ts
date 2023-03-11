import { IsDateString, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateRequisitionDto {
  @IsString()
  @MinLength(3)
  @MaxLength(3)
  requisition_number

  @IsDateString()
  preparation_date

  @IsDateString()
  processing_date

  @IsNumber()
  estimated_amount

  @IsOptional()
  file
}
