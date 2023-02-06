import { IsOptional, IsString } from "class-validator"

export class CreateAreaDto {
  @IsString()
  description: string

  @IsString()
  @IsOptional()
  alias: string
}
