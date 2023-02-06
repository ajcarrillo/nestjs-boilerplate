import { IsBoolean, IsDateString, IsString } from "class-validator"

export class CreateJobDto {
  @IsString()
  name

  @IsString()
  description

  @IsDateString()
  assignamentDate

  @IsBoolean()
  active
}
