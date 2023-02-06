import { SeedUser } from "./seed-user.interface"

export interface SeedData {
  users: SeedUser[];
  actions: any[],
  lines: any[],
  articles: any[],
  areas: any[],
}
