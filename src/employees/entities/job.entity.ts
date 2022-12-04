import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./employee.entity"

@Entity("jobs")
export class Job {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  name: string

  @Column("varchar")
  description: string

  @Column("date")
  assignamentDate: Date

  @Column("boolean", {
    default: true,
  })
  active: boolean

  @ManyToOne(() => Employee, employee => employee.jobs)
  employee: Employee
}
