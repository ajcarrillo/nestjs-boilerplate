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
import { AuthModule } from "../auth/auth.module"
import { BudgetCapsController } from "./budget-caps/budget-caps.controller"
import { BudgetCapsService } from "./budget-caps/budget-caps.service"
import { BudgetCap } from "./entities/budget-cap.entity"
import { AreaAllocation } from "./entities/area-allocation.entity"

@Module({
  controllers: [
    BudgetsController,
    ArticlesController,
    LinesController,
    ActionsController,
    BudgetDetailsController,
    BudgetDetailsMonthController,
    BudgetCapsController,
  ],
  providers: [
    BudgetsService,
    ArticlesService,
    LinesService,
    ActionsService,
    BudgetDetailsService,
    BudgetDetailsMonthService,
    BudgetCapsService,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Action,
      Article,
      Budget,
      BudgetDetail,
      Line,
      BudgetDetailMonth,
      BudgetCap,
      AreaAllocation,
    ]),
    AuthModule,
  ],
  exports: [
    TypeOrmModule,
    BudgetDetailsService,
    ActionsService,
    LinesService,
    BudgetsService,
  ],
})
export class BudgetsModule {}
