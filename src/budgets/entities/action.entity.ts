import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("actions")
export class Action {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column("varchar")
  name: string
}
