import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { BudgetDetail } from "./budget-detail.entity"

@Entity("budget_detail_months")
export class BudgetDetailMonth {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column("uuid")
  budget_detail_id: string

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
}
