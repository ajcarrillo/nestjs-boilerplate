import { BaseEntity } from "src/common/entities"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Action, Budget, Line } from "../../budgets/entities"
import { Area } from "../../employees/entities"
import { SubBudgetAdjustment } from "./sub-budget-adjustment.entity"
import { RequisitionSubBudget } from "./requisition-sub-budget.entity"

@Entity("sub_budgets")
export class SubBudget extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @ManyToOne(() => Action, { eager: true, nullable: true })
  action: Action

  @ManyToOne(() => Line, { eager: true, nullable: true })
  line: Line

  @ManyToOne(() => Area, { eager: true, nullable: true })
  department: Area

  @Column("varchar")
  benefited_population: string

  @Column("varchar")
  objective: string

  @Column("decimal", { precision: 10, scale: 2 })
  cost_per_participant: number

  @Column("int")
  number_participants: number

  @Column("varchar")
  event: string

  @Column("varchar")
  event_venue: string

  @Column("varchar")
  justification: string

  @Column("date")
  start_date: string

  @Column("date")
  end_date: string

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number

  @Column("boolean", { default: false })
  vat_breakdown: boolean

  @Column("varchar")
  risk: string

  @OneToMany(() => SubBudgetAdjustment,
    (adjustment) => adjustment.sourceSubBudget,
  )
  adjustmentsFrom: SubBudgetAdjustment[]

  @OneToMany(() => SubBudgetAdjustment,
    (adjustment) => adjustment.targetSubBudget,
  )
  adjustmentsTo: SubBudgetAdjustment[]

  @OneToMany(() => RequisitionSubBudget, (requisitionSubBudget) => requisitionSubBudget.subBudget, {
    nullable: true,
    eager: true,
  })
  requisitions: RequisitionSubBudget[]

  @ManyToOne(() => Budget, budget => budget.sub_budgets, {
    nullable: true,
    eager: true,
  })
  budget: Budget
}
