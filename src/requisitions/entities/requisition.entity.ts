import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Area } from "../../employees/entities"
import { RequisitionDetail } from "./requisition-detail.entity"

@Entity("requisitions")
export class Requisition {
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

  @OneToMany(() => RequisitionDetail, (requisitionDetail) => requisitionDetail.requisition)
  details: RequisitionDetail[];

  @Index()
  @Column("varchar", { length: 4, nullable: true })
  budget_year: string
}
