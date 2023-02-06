import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./employee.entity"

export enum PositionType {
  ADMINISTRATIVO = "Administrativo",
  DOCENTE = "Docente",
}

@Entity("positions")
export class Position {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  description: string

  @Column("varchar")
  movementType: string

  @Column({
    type: "enum",
    enum: PositionType,
    default: PositionType.DOCENTE,
  })
  positionType: PositionType

  @ManyToOne(() => Employee, employee => employee.positions)
  employee: Employee
}
