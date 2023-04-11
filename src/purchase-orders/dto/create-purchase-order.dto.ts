import { IsDateString, IsNotEmpty, IsUUID } from "class-validator"

export class CreatePurchaseOrderDto {
  @IsNotEmpty()
  @IsUUID()
  requisition_id: string

  @IsNotEmpty()
  order_number: string

  @IsDateString()
  @IsNotEmpty()
  reception_date: string
}
