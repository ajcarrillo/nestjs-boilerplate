import { SeedUser } from "./seed-user.interface"
import { Article } from "../../budgets/entities"

export interface SeedData {
  users: SeedUser[];
  actions: any[],
  lines: any[],
  articles: Article[],
  areas: any[],
}
