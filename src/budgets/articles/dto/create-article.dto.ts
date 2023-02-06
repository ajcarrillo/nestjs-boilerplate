import { IsString } from "class-validator"

export class CreateArticleDto {
  @IsString()
  name: string

  @IsString()
  description: string
}
