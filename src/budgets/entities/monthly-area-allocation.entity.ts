import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Check,
  Generated,
  Index,
  Unique,
} from "typeorm"
import { Area } from "src/employees/entities"

@Entity({ name: "monthly_area_allocations" })
@Unique(["areaId", "month", "year"])
@Check(`"month" >= 1 AND "month" <= 12`)
export class MonthlyAreaAllocation {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number

  @Column({ type: "uuid", default: () => "uuid_generate_v4()" })
  @Generated("uuid")
  @Index({ unique: true })
  uuid: string

  @Column({ type: "uuid", name: "area_id" })
  areaId: string

  @Column({ type: "int" })
  month: number

  @Column({ type: "int" })
  year: number

  @Column({
    type: "numeric",
    precision: 15,
    scale: 2,
    name: "allocated_amount",
  })
  allocatedAmount: string

  @ManyToOne(() => Area, (area) => area.monthlyBudgetAllocations, {
    eager: true,
  })
  @JoinColumn({ name: "area_id" })
  area: Area
}
