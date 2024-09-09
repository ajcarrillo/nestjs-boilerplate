import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { BudgetDetail } from "./budget-detail.entity"
import { SubBudget } from "src/sub-budgets/entities"
import { BudgetCap } from "./budget-cap.entity"

@Entity("budgets")
export class Budget {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("int")
  year: number

  @OneToMany(() => BudgetDetail, budget_detail => budget_detail.budget)
  details: BudgetDetail[]

  @OneToMany(() => SubBudget, sub_budget => sub_budget.budget)
  sub_budgets: SubBudget[]

  @OneToMany(() => BudgetCap, budgetCap => budgetCap.budget)
  budgetCaps: BudgetCap[];
}

