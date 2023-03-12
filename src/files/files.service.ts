import { Injectable } from "@nestjs/common"

@Injectable()
export class FilesService {
  getS3ProductImageUrl(imageName: string) {
    return `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${imageName}`
  }
}
