import { IsString } from "class-validator"

export class CreateLineDto {
  @IsString()
  name: string

  @IsString()
  description: string
}
