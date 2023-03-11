import { Module } from "@nestjs/common"
import { RequisitionsService } from "./requisitions.service"
import { RequisitionsController } from "./requisitions.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Requisition } from "./entities/requisition.entity"

@Module({
  controllers: [RequisitionsController],
  providers: [RequisitionsService],
  imports: [
    TypeOrmModule.forFeature([
      Requisition,
    ]),
  ],
})
export class RequisitionsModule {}
