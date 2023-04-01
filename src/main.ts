import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { Logger, ValidationPipe } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { useContainer } from "class-validator"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Bootstrap");

  app.setGlobalPrefix("api");

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    forbidUnknownValues: true,
    validationError: { target: false }
  }));

  const config = new DocumentBuilder()
    .setTitle("API Boilerplate")
    .setDescription("The Boilerplate API description")
    .setVersion("1.0")
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  app.enableCors()

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(process.env.PORT)
  logger.log(`Application is running on: ${process.env.PORT}`)
}

bootstrap();
