import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator"

export class CreateRequisitionDto {
  @IsString()
  @MinLength(3)
  @MaxLength(3)
  requisition_number: string

  @IsDateString()
  preparation_date: string

  @IsDateString()
  processing_date: string

  @IsNumber()
  estimated_amount: number

  @IsOptional()
  file?: string

  @IsString()
  @IsUUID()
  area_id: string
}
