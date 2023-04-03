import { IsRequisitionIdExist } from "../../common/validators/IsRequsitionExists"
import { IsDateString, IsNotEmpty, IsUUID } from "class-validator"

export class CreatePurchaseOrderDto {
  @IsRequisitionIdExist({
    message: "Requisition with id $value does not exist"
  })
  @IsNotEmpty()
  @IsUUID()
  requisition_id: string;

  @IsNotEmpty()
  order_number: string;

  @IsDateString()
  @IsNotEmpty()
  reception_date: string;
}
