import { IsNotEmpty, IsUUID } from "class-validator";

export class UpdateRequisitionEventDto {
  @IsUUID()
  @IsNotEmpty()
  sub_budget_id: string;
}