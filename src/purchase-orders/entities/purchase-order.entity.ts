import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity } from "../../common/entities"
import { Requisition } from "../../requisitions/entities"

@Entity("purchase_orders")
export class PurchaseOrder extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @OneToOne(() => Requisition, {nullable: false})
  @JoinColumn({ name: "requisition_id" })
  requisition: Requisition

  @Column("uuid")
  requisition_id: string

  @Column("varchar", { length: 3 })
  order_number: string

  @Column("date")
  reception_date: string

  @Column("varchar", { nullable: true })
  file: string
}
