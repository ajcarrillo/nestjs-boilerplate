import { Module } from "@nestjs/common"
import { SeedService } from "./seed.service"
import { SeedController } from "./seed.controller"
import { AuthModule } from "../auth/auth.module"
import { BudgetsModule } from "../budgets/budgets.module"
import { EmployeesModule } from "../employees/employees.module"
import { SubBudgetsModule } from "../sub-budgets/sub-budgets.module"

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AuthModule, BudgetsModule, EmployeesModule, SubBudgetsModule]
})
export class SeedModule {
}
