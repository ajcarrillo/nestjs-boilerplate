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
import { RequisitionSubBudget } from "./entities/requisition-sub-budget.entity"
import { RequisitionSubBudgetService } from "./requsitions/requisition-sub-budget.service"
import { RequisitionSubBudgetController } from "./requsitions/requisition-sub-budget.controller"
import { FilesModule } from "../files/files.module"
import { SubBudgetSummaryView } from "./entities"

@Module({
  controllers: [SubBudgetsController, SubBudgetAdjustmentController, RequisitionSubBudgetController],
  providers: [SubBudgetsService, SubBudgetAdjustmentService, RequisitionSubBudgetService],
  imports: [
    TypeOrmModule.forFeature([
      SubBudget,
      SubBudgetAdjustment,
      RequisitionSubBudget,
      SubBudgetSummaryView
    ]),
    BudgetsModule,
    EmployeesModule,
    AuthModule,
    FilesModule,
  ],
  exports: [TypeOrmModule, SubBudgetsService, SubBudgetAdjustmentService, RequisitionSubBudgetService],
})
export class SubBudgetsModule {
}
