import { Column, Entity, In, Index, PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity } from "../../common/entities"

@Entity("purchase_orders")
export class PurchaseOrder extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("uuid")
  requisition_id: string

  @Column("varchar", { length: 3, nullable: true })
  order_number: string

  @Column("date")
  reception_date: string

  @Column("varchar", { nullable: true })
  file: string

  @Index()
  @Column({ type: "varchar", length: 255 })
  requisitionType: "RequisitionEntity" | "RequisitionSubBudgetEntity"

  @Index()
  @Column("varchar", { length: 4, nullable: true })
  budget_year: string
}
