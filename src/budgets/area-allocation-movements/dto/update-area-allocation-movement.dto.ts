import { PartialType } from "@nestjs/mapped-types"
import { CreateAreaAllocationMovementDto } from "./create-area-allocation-movement.dto"

export class UpdateAreaAllocationMovementDto extends PartialType(
  CreateAreaAllocationMovementDto
) {}
