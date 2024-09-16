import { Column, ViewEntity } from "typeorm"

@ViewEntity({
  name: "v_area_budget_cap_allocation",
  synchronize: false,
})
export class AreaBudgetCapAllocationView {
  @Column("int")
  budget_year: number

  @Column("uuid")
  budget_cap_id: string

  @Column("uuid")
  area_allocation_id: string

  @Column("uuid")
  area_id: string

  @Column("varchar")
  description: string

  @Column({ type: "numeric", precision: 15, scale: 2 })
  total_amount: number

  @Column({ type: "numeric", precision: 15, scale: 2 })
  movements_total: number

  @Column({ type: "numeric", precision: 15, scale: 2 })
  total_allocation_amount: number
}
