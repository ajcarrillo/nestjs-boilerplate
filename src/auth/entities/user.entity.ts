import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { MinLength } from "class-validator"
import { Area } from "src/employees/entities"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", {
    unique: true,
  })
  email: string

  @Column("varchar", {
    select: false,
  })
  @MinLength(6)
  password: string

  @Column("varchar")
  firstName: string

  @Column("varchar")
  lastName: string

  @Column("varchar", {
    nullable: true,
  })
  motherName: string

  @Column("boolean", {
    default: true,
  })
  isActive: boolean

  @Column("text", {
    array: true,
    default: ["user"],
  })
  roles: string[]

  @ManyToOne(() => Area, (area) => area.users, {
    nullable: true,
  })
  area: Area

  @BeforeInsert()
  normalizeEmailOnInsert() {
    this.email = this.email.toLowerCase()
  }

  @BeforeUpdate()
  normalizeEmailOnUpdate() {
    this.normalizeEmailOnInsert()
  }
}
