import { PartialType } from "@nestjs/swagger"
import { CreateRequisitionDetailDto } from "./create-requisition-detail.dto"

export class UpdateRequisitionDetailDto extends PartialType(CreateRequisitionDetailDto) {}
