import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Requisition } from "../../requisitions/entities/requisition.entity"
import { AreaAllocation } from "src/budgets/entities/area-allocation.entity"
import { MonthlyAreaAllocation } from "src/budgets/entities/monthly-area-allocation.entity"
import { User } from "src/auth/entities"

@Entity("areas")
export class Area {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  description: string

  @Column("varchar", {
    nullable: true,
  })
  alias: string

  @Column("varchar", {
    nullable: true,
  })
  clave_oficial: string

  @OneToMany(() => AreaAllocation, (areaAllocation) => areaAllocation.area)
  areaAllocations: AreaAllocation[]

  @OneToMany(() => Requisition, (requisition) => requisition.area)
  requisitions: Requisition[]

  @OneToMany(() => MonthlyAreaAllocation, (allocation) => allocation.area)
  monthlyBudgetAllocations: MonthlyAreaAllocation[]

  @OneToMany(() => User, (user) => user.area)
  users: User[]
}
