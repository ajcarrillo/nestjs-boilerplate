import { Module } from "@nestjs/common"
import { RequisitionsService } from "./requisitions.service"
import { RequisitionsController } from "./requisitions.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Requisition, RequisitionDetail } from "./entities"
import { EmployeesModule } from "../employees/employees.module"
import { RequisitionDetailsController } from "./requisition-detail/requisition-details.controller"
import { RequisitionDetailsService } from "./requisition-detail/requisition-details.service"
import { BudgetsModule } from "../budgets/budgets.module"
import { AuthModule } from "../auth/auth.module"

@Module({
  controllers: [RequisitionsController, RequisitionDetailsController],
  providers: [RequisitionsService, RequisitionDetailsService],
  imports: [
    TypeOrmModule.forFeature([
      Requisition,
      RequisitionDetail
    ]),
    EmployeesModule,
    BudgetsModule,
    AuthModule
  ],
  exports: [RequisitionsService],
})
export class RequisitionsModule {}
