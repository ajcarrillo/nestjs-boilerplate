import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("articles")
export class Article {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column("varchar")
  name: string

  @Column("varchar")
  description: string
}
