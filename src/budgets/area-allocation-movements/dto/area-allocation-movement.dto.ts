import { AreaAllocation } from "src/budgets/entities/area-allocation.entity"

export class AreaAllocationMovementDto {
  uuid: string
  amount: string
  createdAt: Date
  description?: string
  areaAllocation: AreaAllocation
  user: string
}
