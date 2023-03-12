import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common"
import { S3 } from "aws-sdk"
import { v4 as uuid } from "uuid"
import { ConfigService } from "@nestjs/config"

@Injectable()
export class S3Service {
  AWS_S3_BUCKET = process.env.AWS_S3_BUCKET
  s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  })
  private readonly logger = new Logger("ProductsService")

  constructor(
    private readonly configService: ConfigService,
  ) {
  }

  async uploadFile(file: Express.Multer.File) {
    const { mimetype } = file
    const fileExtension = mimetype.split("/")[1]
    const fileName = `${uuid()}.${fileExtension}`

    return await this.s3_upload(file.buffer, this.configService.get("AWS_S3_BUCKET"), fileName, file.mimetype)
  }

  async s3_upload(file, bucket, name, mimetype) {
    const params =
      {
        Bucket: bucket,
        Key: String(name),
        Body: file,
        ACL: "public-read",
        ContentType: mimetype,
        ContentDisposition: "inline",
        CreateBucketConfiguration:
          {
            LocationConstraint: "us-east-1",
          },
      }

    //console.log(params)
    try {
      return await this.s3.upload(params).promise()
    } catch (e) {
      this.logger.error(e)
      throw new InternalServerErrorException("Ayuda!")
    }
  }

  async s3_getFile(name) {
    const params =
      {
        Bucket: this.configService.get("AWS_S3_BUCKET"),
        Key: String(name),
      }

    //console.log(params)
    try {
      //return await this.s3.getObject(params).promise()
      const stream = await this.s3.getObject(params).createReadStream()
      return stream
    } catch (e) {
      this.logger.error(e)
      throw new InternalServerErrorException("Ayuda!")
    }
  }
}
