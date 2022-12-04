import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./employee.entity"

export enum ScholarshipType {
  SNI = "SNI",
  SIDEPAE = "SIDEPAE",
}

@Entity("scholarships")
export class Scholarship {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({
    type: "enum",
    enum: ScholarshipType,
    default: ScholarshipType.SNI,
  })
  type: string

  @Column("varchar")
  level: string

  @Column("date")
  assignamentDate: Date

  @ManyToOne(() => Employee, employee => employee.scholarships)
  employee: Employee
}
