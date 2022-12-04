import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { Logger, ValidationPipe } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Bootstrap");

  app.setGlobalPrefix("api");

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  const config = new DocumentBuilder()
    .setTitle("API Boilerplate")
    .setDescription("The Boilerplate API description")
    .setVersion("1.0")
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  app.enableCors()

  await app.listen(process.env.PORT)
  logger.log(`Application is running on: ${process.env.PORT}`)
}

bootstrap();
