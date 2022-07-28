import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";
import { EnvConfigurations } from "./config/env.config";
import { JoiValidationSchema } from "./config/joi.validation";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfigurations],
      validationSchema: JoiValidationSchema
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    })
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
