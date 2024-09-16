import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { BaseEntity } from "../../common/entities"
import { PurchaseOrder } from "../../purchase-orders/entities"

@Entity("payment_orders")
export class PaymentOrder extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @OneToOne(() => PurchaseOrder, { nullable: false })
  @JoinColumn({ name: "purchase_order_id" })
  purchaseOrder: PurchaseOrder

  @Column("varchar")
  payment_number: string

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number

  @Column("date")
  payment_date: string

  @Column("varchar", { nullable: true })
  payment_file: string

  @Column("varchar", { nullable: true })
  check_file: string

  @Column("varchar", { nullable: true })
  check_number: string

  @Column("boolean", { default: false })
  is_submitted_to_finance: boolean

  @Index()
  @Column("varchar", { length: 4, nullable: true })
  budget_year: string
}
