import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { BudgetDetail } from "./budget-detail.entity"

@Entity("budgets")
export class Budget {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("int")
  year: number

  @OneToMany(() => BudgetDetail, budget_detail => budget_detail.budget)
  details: BudgetDetail[]
}

