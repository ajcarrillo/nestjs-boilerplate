import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { AcademicDegree } from "./academic-degree.entity"
import { Position } from "./position.entity"
import { Job } from "./job.entity"
import { Scholarship } from "./scholarship.entity"

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  employeeNumber: string

  @Column("varchar")
  name: string

  @Column("varchar")
  firstName: string

  @Column("varchar", {
    nullable: true,
  })
  lastName: string

  @Column("varchar", {
    nullable: true,
  })
  rfc: string

  @Column("varchar", {
    nullable: true,
  })
  curp: string

  @Column("integer")
  hiredYear: number

  @OneToMany(
    () => AcademicDegree,
    academicDegree => academicDegree.employee,
  )
  academicDegrees: AcademicDegree[]

  @OneToMany(() => Position, position => position.employee)
  positions: Position[]

  @OneToMany(() => Job, job => job.employee)
  jobs: Job[]

  @OneToMany(() => Scholarship, scholarship => scholarship.employee)
  scholarships: Scholarship[]
}
