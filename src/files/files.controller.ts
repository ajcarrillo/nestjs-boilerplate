import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common"
import { S3Service } from "./s3.service"
import { ConfigService } from "@nestjs/config"
import { Response } from "express"
import { FileInterceptor } from "@nestjs/platform-express"
import { fileFilter } from "./helpers"
import { RequisitionsService } from "../requisitions/requisitions.service"
import { PurchaseOrdersService } from "../purchase-orders/purchase-orders.service"

@Controller('files')
export class FilesController {
  constructor(
    private readonly s3Service: S3Service,
    private readonly configService: ConfigService,
    private readonly requisitionService: RequisitionsService,
    private readonly purchaseOrderService: PurchaseOrdersService,
  ) {}

  @Get("requisitions/:id/:filename")
  async getRequisitionFile(
    @Res() res: Response,
    @Param("id") id: string,
    @Param("filename") filename: string,
  ) {
    const stream = await this.s3Service.s3_getFile(filename)

    return stream.pipe(res)
  }

  @Post("requisitions/:id/")
  @UseInterceptors(FileInterceptor("file", {
    fileFilter: fileFilter
  }))
  async uploadRequisitionFile(
    @UploadedFile() file: Express.Multer.File,
    @Param("id") id: string,
    @Res() res
  ) {
    if(!file) throw new BadRequestException("No file received")

    const { Key } = await this.s3Service.uploadFile(file)

    await this.requisitionService.updateFileName(id, Key)

    return res.json({ "file_name": Key  })
  }

  @Get("purchase-orders/:id/:filename")
  async getPurchaseOderFile(
    @Res() res: Response,
    @Param("id") id: string,
    @Param("filename") filename: string,
  ) {
    const stream = await this.s3Service.s3_getFile(filename)

    return stream.pipe(res)
  }

  @Post("purchase-orders/:id/")
  @UseInterceptors(FileInterceptor("file", {
    fileFilter: fileFilter
  }))
  async uploadPurchaseOrderFile(
    @UploadedFile() file: Express.Multer.File,
    @Param("id") id: string,
    @Res() res
  ) {
    if(!file) throw new BadRequestException("No file received")

    const { Key } = await this.s3Service.uploadFile(file)

    await this.purchaseOrderService.updateFileName(id, Key)

    return res.json({ "file_name": Key  })
  }

  @Get("payment-orders/:id/:filename")
  async getPaymentOderFile(
    @Res() res: Response,
    @Param("id") id: string,
    @Param("filename") filename: string,
  ) {
    const stream = await this.s3Service.s3_getFile(filename)

    return stream.pipe(res)
  }
}
