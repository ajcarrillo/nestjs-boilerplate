import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Budget } from "./budget.entity"
import { Action } from "./action.entity"
import { Line } from "./line.entity"
import { Area } from "../../employees/entities"
import { Article } from "./article.entity"


@Entity("budget_details")
export class BudgetDetail {
  @PrimaryGeneratedColumn("increment")
  id: bigint

  @ManyToOne(() => Budget, budget => budget.details)
  budget: Budget

  @ManyToOne(() => Action)
  action: Action

  @ManyToOne(() => Line)
  line: Line

  @ManyToOne(() => Area)
  department: Area

  @ManyToOne(() => Article)
  article: Article

  @Column("int")
  month: number

  @Column("decimal", { precision: 10, scale: 2 })
  estimated_amount: number

  @Column("varchar")
  justification: string

  @Column("int")
  quantity: number

  @Column("decimal", { precision: 10, scale: 2 })
  total: number
}
