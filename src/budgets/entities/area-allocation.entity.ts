import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Generated,
  OneToMany,
} from "typeorm"
import { BudgetCap } from "./budget-cap.entity"
import { Area } from "src/employees/entities"
import { AreaAllocationMovement } from "./area-allocation-movement.entity"

@Entity("area_allocations")
export class AreaAllocation {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number

  @Column({ type: "uuid" })
  @Generated("uuid")
  uuid: string

  @ManyToOne(() => Area, (area) => area.areaAllocations, {
    onDelete: "CASCADE",
  })
  area: Area

  @ManyToOne(() => BudgetCap, (budgetCap) => budgetCap.areaAllocations, {
    onDelete: "CASCADE",
  })
  budgetCap: BudgetCap

  @Column({ type: "numeric", precision: 15, scale: 2 })
  totalAmount: number

  @OneToMany(
    () => AreaAllocationMovement,
    (movement) => movement.areaAllocation,
    { cascade: true }
  )
  areaAllocationMovements: AreaAllocationMovement[]
}
