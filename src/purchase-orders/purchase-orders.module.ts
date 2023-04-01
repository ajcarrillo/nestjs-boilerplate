import { Module } from "@nestjs/common"
import { PurchaseOrdersService } from "./purchase-orders.service"
import { PurchaseOrdersController } from "./purchase-orders.controller"
import { PurchaseOrder } from "./entities"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CommonModule } from "../common/common.module"
import { RequisitionsModule } from "../requisitions/requisitions.module"
import { AuthModule } from "../auth/auth.module"

@Module({
  controllers: [PurchaseOrdersController],
  providers: [
    PurchaseOrdersService,
  ],
  imports: [
    TypeOrmModule.forFeature([
      PurchaseOrder,
    ]),
    CommonModule,
    RequisitionsModule,
    AuthModule,
  ],
  exports: [PurchaseOrdersService]
})
export class PurchaseOrdersModule {}
