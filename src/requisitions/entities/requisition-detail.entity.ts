import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Requisition } from "./requisition.entity"
import { BudgetDetail } from "../../budgets/entities"

@Entity('requisition_details')
export class RequisitionDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Requisition, (requisition) => requisition.details, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'requisition_id' })
  requisition: Requisition;

  @ManyToOne(() => BudgetDetail, (budgetDetail) => budgetDetail.details, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'budget_detail_id' })
  budgetDetail: BudgetDetail;

  @Column('integer', { nullable: false })
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  unit_price: number;
}
