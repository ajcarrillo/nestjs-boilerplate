import { PartialType } from "@nestjs/mapped-types"
import { CreateMonthlyAreaAllocationDto } from "./create-monthly-area-allocation.dto"

export class UpdateMonthlyAreaAllocationDto extends PartialType(
  CreateMonthlyAreaAllocationDto
) {}
