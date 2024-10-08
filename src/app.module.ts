import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"
import { ConfigModule } from "@nestjs/config"
import { EnvConfigurations } from "./config/env.config"
import { JoiValidationSchema } from "./config/joi.validation"
import { AppController } from "./app.controller"
import { AuthModule } from "./auth/auth.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SeedModule } from "./seed/seed.module"
import { UsersModule } from "./users/users.module"
import { EmployeesModule } from "./employees/employees.module"
import { SnakeNamingStrategy } from "typeorm-naming-strategies"
import { BudgetsModule } from "./budgets/budgets.module"
import { RequisitionsModule } from "./requisitions/requisitions.module"
import { FilesModule } from "./files/files.module"
import { PaymentOrdersModule } from "./payment-orders/payment-orders.module"
import { CommonModule } from "./common/common.module"
import { PurchaseOrdersModule } from "./purchase-orders/purchase-orders.module"
import { SubBudgetsModule } from "./sub-budgets/sub-budgets.module"
import { BudgetYearMiddleware } from "./common/middleware"


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfigurations],
      validationSchema: JoiValidationSchema,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    AuthModule,
    SeedModule,
    UsersModule,
    EmployeesModule,
    BudgetsModule,
    RequisitionsModule,
    FilesModule,
    PaymentOrdersModule,
    CommonModule,
    PurchaseOrdersModule,
    SubBudgetsModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BudgetYearMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL })
  }
}
