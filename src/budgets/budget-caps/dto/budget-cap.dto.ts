import { Budget } from "src/budgets/entities"
import { AreaAllocation } from "src/budgets/entities/area-allocation.entity"

export class BudgetCapDto {
  uuid: string
  totalAmount: number
  budget: Budget
  areaAllocations: AreaAllocation[]
}
