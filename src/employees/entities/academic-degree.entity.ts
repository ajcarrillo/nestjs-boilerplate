import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./employee.entity"

@Entity("academic_degrees")
export class AcademicDegree {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  abbreviatedGrade: string

  @Column("varchar")
  grade: string

  @Column("varchar")
  career: string

  @Column("varchar")
  license: string

  @ManyToOne(() => Employee, employee => employee.academicDegrees)
  employee: Employee
}
