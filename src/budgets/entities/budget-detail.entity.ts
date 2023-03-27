import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Budget } from "./budget.entity"
import { Action } from "./action.entity"
import { Line } from "./line.entity"
import { Area } from "../../employees/entities"
import { Article } from "./article.entity"
import { BudgetDetailMonth } from "./budget-detail-month.entity"
import { RequisitionDetail } from "../../requisitions/entities"


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

  @ManyToOne(() => Action, { eager: true })
  action: Action

  @Column("number")
  line_id: number

  @ManyToOne(() => Line, { eager: true })
  line: Line

  @Column("uuid")
  department_id: string

  @ManyToOne(() => Area, { eager: true })
  department: Area

  @Column("number")
  article_id: number

  @ManyToOne(() => Article, { eager: true })
  article: Article

  @Column("decimal", { precision: 10, scale: 2 })
  estimated_amount: number

  @Column("varchar")
  justification: string

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  total: number

  @OneToMany(
    () => BudgetDetailMonth,
      budget_detail_month => budget_detail_month.budget_detail,
    {cascade: true, eager:true}
  )
  months: BudgetDetailMonth[]

  @OneToMany(() => RequisitionDetail, (requisitionDetail) => requisitionDetail.budgetDetail)
  details: RequisitionDetail[];
}
