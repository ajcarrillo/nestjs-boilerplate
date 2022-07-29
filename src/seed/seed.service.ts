import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../auth/entities";
import { Repository } from "typeorm";
import { initialData } from "./data/initial-data";

@Injectable()
export class SeedService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
  }

  async seed() {
    await this.deleteAllTables();
    await this.insertNewUsers();
    return "seed complete";
  }

  private async deleteAllTables() {
    await this.userRepository.delete({});
  }

  private async insertNewUsers() {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach(user => {
      users.push(this.userRepository.create(user));
    });

    await this.userRepository.save(users);

    return users[0];
  }
}
