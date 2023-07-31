import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { BudgetDetail } from "./budget-detail.entity"

@Entity("budget_detail_months")
export class BudgetDetailMonth {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column("int")
  budget_detail_id: number

  @ManyToOne(
    () => BudgetDetail,
      budget_detail => budget_detail.months,
    {  onDelete: 'CASCADE' }
  )
  budget_detail: BudgetDetail

  @Column("int")
  quantity: number

  @Column("varchar")
  month: string

  @Column("int", {nullable: true})
  authorized_quantity: number

  @Column("boolean", {default: false})
  authorized: boolean
}
