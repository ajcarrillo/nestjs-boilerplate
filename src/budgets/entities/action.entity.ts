import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("actions")
export class Action {
  @PrimaryGeneratedColumn("increment")
  id: bigint

  @Column("varchar")
  name: string
}
