import { Module } from "@nestjs/common"
import { BaseEntity } from "./entities"
import { TypeOrmModule } from "@nestjs/typeorm"
import { RequisitionsModule } from "../requisitions/requisitions.module"
import { IsRequisitionIdExistConstraint } from "./validators/IsRequsitionExists"

@Module({
  controllers: [],
  providers: [IsRequisitionIdExistConstraint],
  imports: [
    TypeOrmModule.forFeature([BaseEntity]),
    RequisitionsModule
  ],
  exports: [TypeOrmModule, IsRequisitionIdExistConstraint],
})
export class CommonModule {

}
