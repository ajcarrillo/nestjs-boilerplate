import { IsDateString, IsDecimal, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"
import { Express } from "express"

export class CreatePaymentOrderDto {
  @IsNotEmpty()
  @IsUUID()
  purchase_order_id: string

  @IsNotEmpty()
  @IsString()
  payment_number: string

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: "1,2" })
  amount: number

  @IsNotEmpty()
  @IsDateString()
  payment_date: string

  @IsOptional()
  payment_file?: Express.Multer.File | null

  @IsOptional()
  check_file?: Express.Multer.File | null

  @IsOptional()
  @IsString()
  check_number?: string

  @IsOptional()
  @IsString()
  is_submitted_to_finance: boolean;
}
