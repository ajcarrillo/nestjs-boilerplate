import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { MinLength } from "class-validator"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", {
    unique: true,
  })
  email: string;

  @Column("varchar", {
    select: false,
  })
  @MinLength(6)
  password: string

  @Column("varchar", {
    name: "first_name",
  })
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

  @BeforeInsert()
  normalizeEmailOnInsert() {
    this.email = this.email.toLowerCase()
  }

  @BeforeUpdate()
  normalizeEmailOnUpdate() {
    this.normalizeEmailOnInsert()
  }
}
