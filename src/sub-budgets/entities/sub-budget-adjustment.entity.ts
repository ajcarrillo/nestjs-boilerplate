import { BaseEntity } from "src/common/entities"
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SubBudget } from "./sub-budget.entity"

@Entity('sub_budget_adjustments')
export class SubBudgetAdjustment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => SubBudget, (subBudget) => subBudget.adjustmentsFrom, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  sourceSubBudget: SubBudget;

  @ManyToOne(() => SubBudget, (subBudget) => subBudget.adjustmentsTo, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  targetSubBudget: SubBudget;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('varchar')
  justification: string;

  @Index()
  @Column("varchar", { length: 4, nullable: true })
  budget_year: string
}
