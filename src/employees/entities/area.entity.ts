import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
