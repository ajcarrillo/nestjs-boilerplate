import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Generated,
} from "typeorm"
import { Budget } from "./budget.entity"
import { AreaAllocation } from "./area-allocation.entity"

@Entity("budget_caps")
export class BudgetCap {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number

  @Column({ type: "uuid" })
  @Generated("uuid")
  uuid: string

  @ManyToOne(() => Budget, (budget) => budget.budgetCaps, {
    onDelete: "CASCADE",
  })
  budget: Budget

  @Column({ type: "numeric", precision: 15, scale: 2 })
  totalAmount: number

  @OneToMany(() => AreaAllocation, (areaAllocation) => areaAllocation.budgetCap)
  areaAllocations: AreaAllocation[]
}
