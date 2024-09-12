import { PartialType } from "@nestjs/mapped-types"
import { CreateAreaAllocationDto } from "./create-area-allocation.dto"
import { IsOptional, IsUUID } from "class-validator"

export class UpdateAreaAllocationDto extends PartialType(
  CreateAreaAllocationDto
) {
  @IsOptional()
  @IsUUID()
  uuid?: string
}
