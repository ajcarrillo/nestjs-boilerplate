import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("requisitions")
export class Requisition {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", { length: 3 })
  requisition_number: string

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  estimated_amount: number

  @Column("date",)
  preparation_date: string

  @Column("date")
  processing_date: string

  @Column("varchar", { nullable: true })
  file: string
}
