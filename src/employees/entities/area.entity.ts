import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Requisition } from "../../requisitions/entities/requisition.entity"

@Entity("areas")
export class Area {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  description: string

  @Column("varchar", {
    nullable: true,
  })
  alias: string

  @Column("varchar", {
    nullable: true,
  })
  clave_oficial: string

  @OneToMany(() => Requisition, (requisition) => requisition.area)
  requisitions: Requisition[];
}
