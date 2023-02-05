import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("lines")
export class Line {
  @PrimaryGeneratedColumn("increment")
  id: bigint

  @Column("varchar")
  name: string

  @Column("varchar")
  description: string
}
