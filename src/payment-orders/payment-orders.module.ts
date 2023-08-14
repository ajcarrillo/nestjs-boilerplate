import { forwardRef, Module } from "@nestjs/common";
import { PaymentOrdersService } from "./payment-orders.service"
import { PaymentOrdersController } from "./payment-orders.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PaymentOrder } from "./entities"
import { AuthModule } from "../auth/auth.module"
import { PurchaseOrdersModule } from "../purchase-orders/purchase-orders.module"
import { FilesModule } from "../files/files.module"

@Module({
  controllers: [PaymentOrdersController],
  providers: [PaymentOrdersService],
  imports: [
    TypeOrmModule.forFeature([
      PaymentOrder
    ]),
    AuthModule,
    forwardRef(() => PurchaseOrdersModule),
    forwardRef(() => FilesModule),
  ],
  exports: [PaymentOrdersService],
})
export class PaymentOrdersModule {}
