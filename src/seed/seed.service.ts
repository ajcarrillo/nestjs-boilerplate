/*eslint-disable*/
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "../auth/entities"
import { Repository } from "typeorm"
import { initialData } from "./data/initial-data"
import { Action, Article, Line } from "../budgets/entities"
import { Area } from "../employees/entities"

@Injectable()
export class SeedService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Action)
    private readonly actionRepository: Repository<Action>,
    @InjectRepository(Line)
    private readonly lineRepository: Repository<Line>,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>
  ) {
  }

  async seed() {
    await this.deleteAllTables();
    await this.insertNewUsers();
    await this.insertNewActions();
    await this.insertNewLines();
    await this.insertNewArticles();
    await this.insertNewAreas();

    return "seed complete";
  }

  private async deleteAllTables() {
    await this.userRepository.delete({});
    await this.actionRepository.delete({});
    await this.lineRepository.delete({});
    await this.articleRepository.delete({});
    await this.areaRepository.delete({});
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

  private async insertNewActions() {
    const seedActions = initialData.actions;

    const actions: Action[] = [];

    seedActions.forEach(action => {
      //@ts-ignore
      actions.push(this.actionRepository.create(action));
    });

    await this.actionRepository.save(actions);

    return actions[0];
  }

  private async insertNewLines() {
    const seedLines = initialData.lines;

    const lines: Line[] = [];

    seedLines.forEach(line => {
      //@ts-ignore
      lines.push(this.lineRepository.create(line));
    });

    await this.lineRepository.save(lines);

    return lines[0];
  }

  private async insertNewArticles() {
    const seedArticles = initialData.articles;

    const articles: Article[] = [];

    seedArticles.forEach(article => {
      articles.push(this.articleRepository.create(article));
    });

    await this.articleRepository.save(articles);

    return articles[0];
  }

  private async insertNewAreas() {
    const seedAreas = initialData.areas;

    const areas: Area[] = [];

    seedAreas.forEach(area => {
      //@ts-ignore
      areas.push(this.areaRepository.create(area));
    });

    await this.areaRepository.save(areas);

    return areas[0];
  }
}
