import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Area } from "./area.entity"

@Entity("assignament_areas")
export class AssignamentArea {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @ManyToOne(() => Area)
  @JoinColumn({ name: "area_id" })
  area: Area

  @Column("uuid")
  area_id: string

  @Column("date")
  startDate: Date

  @Column("date", {
    nullable: true,
  })
  endDate: Date

  @Column("boolean")
  active: boolean
}
