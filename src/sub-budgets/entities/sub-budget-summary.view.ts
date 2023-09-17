import { Action, Line } from 'src/budgets/entities';
import { Area } from 'src/employees/entities';
import { ViewEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { SubBudgetAdjustment } from './sub-budget-adjustment.entity';
import { RequisitionSubBudget } from './requisition-sub-budget.entity';

@ViewEntity({
  name: 'v_sub_budget_summary',
  synchronize: false
})
export class SubBudgetSummaryView {

  @Column('string')
  id: number;

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

  @Column("decimal", { precision: 10, scale: 2 })
  programmed_amount: number;

  @Column("decimal", { precision: 10, scale: 2 })
  total_estimated_amount: number;

  @Column("decimal", { precision: 10, scale: 2 })
  total_payment_orders_amount: number;

  @Column("decimal", { precision: 10, scale: 2 })
  total_in_adjustments: number;

  @Column("decimal", { precision: 10, scale: 2 })
  total_out_adjustments: number;

  @Column("decimal", { precision: 10, scale: 2 })
  savings: number;

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
}
