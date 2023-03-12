import { Module } from "@nestjs/common"
import { FilesService } from "./files.service"
import { FilesController } from "./files.controller"
import { S3Service } from "./s3.service"
import { ConfigModule } from "@nestjs/config"
import { RequisitionsModule } from "../requisitions/requisitions.module"

@Module({
  controllers: [FilesController],
  providers: [FilesService, S3Service],
  imports: [ConfigModule, RequisitionsModule]
})
export class FilesModule {}
