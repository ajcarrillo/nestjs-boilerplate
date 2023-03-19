import { Module } from "@nestjs/common"
import { BudgetsService } from "./budgets.service"
import { BudgetsController } from "./budgets.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Action, Article, Budget, BudgetDetail, Line } from "./entities"
import { ArticlesController } from "./articles/articles.controller"
import { ArticlesService } from "./articles/articles.service"
import { LinesController } from "./lines/lines.controller"
import { LinesService } from "./lines/lines.service"
import { ActionsController } from "./actions/actions.controller"
import { ActionsService } from "./actions/actions.service"
import { BudgetDetailsController } from "./budget-details/budget-details.controller"
import { BudgetDetailsService } from "./budget-details/budget-details.service"
import { BudgetDetailMonth } from "./entities/budget-detail-month.entity"
import { BudgetDetailsMonthController } from "./budget-details/budget-details-month.controller"
import { BudgetDetailsMonthService } from "./budget-details/budget-details-month.service"

@Module({
  controllers: [BudgetsController, ArticlesController, LinesController, ActionsController, BudgetDetailsController, BudgetDetailsMonthController],
  providers: [BudgetsService, ArticlesService, LinesService, ActionsService, BudgetDetailsService, BudgetDetailsMonthService],
  imports: [
    TypeOrmModule.forFeature([
      Action,
      Article,
      Budget,
      BudgetDetail,
      Line,
      BudgetDetailMonth
    ]),
  ],
  exports: [TypeOrmModule]
})
export class BudgetsModule {
}
