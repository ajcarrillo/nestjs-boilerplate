import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";
import { EnvConfigurations } from "./config/env.config";
import { JoiValidationSchema } from "./config/joi.validation";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeedModule } from "./seed/seed.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfigurations],
      validationSchema: JoiValidationSchema
    }),
    //TODO: Implement the TypeORM module
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "qwerty",
      database: "db",
      autoLoadEntities: true,
      synchronize: true,
      charset: "utf8"
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    }),
    AuthModule,
    SeedModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
