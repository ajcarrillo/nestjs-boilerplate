import { Module } from "@nestjs/common"
import { BudgetsService } from "./budgets.service"
import { BudgetsController } from "./budgets.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Action, Article, Budget, BudgetDetail, Line } from "./entities"
import { ArticlesController } from "./articles/articles.controller"
import { ArticlesService } from "./articles/articles.service"
import { LinesController } from "./lines/lines.controller"
import { LinesService } from "./lines/lines.service"

@Module({
  controllers: [BudgetsController, ArticlesController, LinesController],
  providers: [BudgetsService, ArticlesService, LinesService],
  imports: [
    TypeOrmModule.forFeature([
      Action,
      Article,
      Budget,
      BudgetDetail,
      Line,
    ]),
  ],
})
export class BudgetsModule {
}
