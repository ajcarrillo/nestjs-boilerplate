import { Module } from "@nestjs/common"
import { SubBudgetsService } from "./sub-budgets.service"
import { SubBudgetsController } from "./sub-budgets.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SubBudget } from "./entities/sub-budget.entity"
import { SubBudgetAdjustmentController } from "./sub-budget-adjustment/sub-budget-adjustment.controller"
import { SubBudgetAdjustmentService } from "./sub-budget-adjustment/sub-budget-adjustment.service"
import { BudgetsModule } from "../budgets/budgets.module"
import { EmployeesModule } from "../employees/employees.module"
import { SubBudgetAdjustment } from "./entities/sub-budget-adjustment.entity"
import { AuthModule } from "../auth/auth.module"

@Module({
  controllers: [SubBudgetsController, SubBudgetAdjustmentController],
  providers: [SubBudgetsService, SubBudgetAdjustmentService],
  imports: [
    TypeOrmModule.forFeature([
      SubBudget,
      SubBudgetAdjustment
    ]),
    BudgetsModule,
    EmployeesModule,
    AuthModule
  ],
  exports: [TypeOrmModule, SubBudgetsService, SubBudgetAdjustmentService]
})
export class SubBudgetsModule {}
