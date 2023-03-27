import { IsInt, IsNumber, IsUUID, Min } from "class-validator"

export class CreateRequisitionDetailDto {
  @IsUUID()
  requisition_id: string;

  @IsNumber()
  budget_detail_id: number;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(0)
  unit_price: number;
}
