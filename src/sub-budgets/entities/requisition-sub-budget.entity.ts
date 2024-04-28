import { BaseEntity } from "src/common/entities"
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Area } from "../../employees/entities"
import { SubBudget } from "./sub-budget.entity"

@Entity("requisition_sub_budgets")
export class RequisitionSubBudget extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", { length: 3 })
  requisition_number: string

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  estimated_amount: number

  @Column("date")
  preparation_date: string

  @Column("date")
  processing_date: string

  @Column("varchar", { nullable: true })
  file: string

  @ManyToOne(() => Area, (area) => area.requisitions, { nullable: true, eager: true })
  @JoinColumn({ name: "area_id" })
  area: Area

  @ManyToOne(() => SubBudget, (subBudget) => subBudget.requisitions, { nullable: true })
  @JoinColumn({ name: "sub_budget_id" })
  subBudget: SubBudget

  @Index()
  @Column("varchar", { length: 4, nullable: true })
  budget_year: string
}
