import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
