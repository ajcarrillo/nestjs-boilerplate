import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Budget } from "./budget.entity"
import { Action } from "./action.entity"
import { Line } from "./line.entity"
import { Area } from "../../employees/entities"
import { Article } from "./article.entity"


@Entity("budget_details")
export class BudgetDetail {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column("uuid")
  budget_id: string

  @ManyToOne(() => Budget, budget => budget.details)
  budget: Budget

  @Column("number")
  action_id: number

  @ManyToOne(() => Action)
  action: Action

  @Column("number")
  line_id: number

  @ManyToOne(() => Line)
  line: Line

  @Column("uuid")
  department_id: string

  @ManyToOne(() => Area)
  department: Area

  @Column("number")
  article_id: number

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

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  total: number
}
