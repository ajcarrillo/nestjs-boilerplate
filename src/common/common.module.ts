import { Module } from "@nestjs/common"
import { BaseEntity } from "./entities"
import { TypeOrmModule } from "@nestjs/typeorm"
import { RequisitionsModule } from "../requisitions/requisitions.module"
import { IsRequisitionIdExistConstraint } from "./validators/IsRequsitionExists"
import { BudgetYearMiddleware } from "./middleware"

@Module({
  controllers: [],
  providers: [IsRequisitionIdExistConstraint, BudgetYearMiddleware],
  imports: [
    TypeOrmModule.forFeature([BaseEntity]),
    RequisitionsModule
  ],
  exports: [TypeOrmModule, IsRequisitionIdExistConstraint, BudgetYearMiddleware],
})
export class CommonModule {

}
