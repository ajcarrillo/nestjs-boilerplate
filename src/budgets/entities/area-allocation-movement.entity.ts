import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Generated,
  Index,
  CreateDateColumn,
} from "typeorm"
import { AreaAllocation } from "./area-allocation.entity"
import { User } from "src/auth/entities"

@Entity({ name: "area_allocation_movements" })
export class AreaAllocationMovement {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number

  @Column({ type: "uuid", default: () => "uuid_generate_v4()" })
  @Generated("uuid")
  @Index({ unique: true })
  uuid: string

  @Column({ type: "bigint", name: "area_allocation_id" })
  areaAllocationId: number

  @Column({ type: "numeric", precision: 15, scale: 2 })
  amount: string

  @Column({ type: "uuid", name: "user_id" })
  userId: string

  @CreateDateColumn({
    type: "timestamp",
    name: "created_at",
    default: () => "NOW()",
  })
  createdAt: Date

  @Column({ type: "text", nullable: true })
  description: string

  @ManyToOne(
    () => AreaAllocation,
    (areaAllocation) => areaAllocation.areaAllocationMovements,
    {
      onDelete: "CASCADE",
    }
  )
  @JoinColumn({ name: "area_allocation_id" })
  areaAllocation: AreaAllocation

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User
}
