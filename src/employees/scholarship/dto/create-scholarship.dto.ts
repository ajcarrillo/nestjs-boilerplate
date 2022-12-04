import { IsDateString, IsEnum, IsString } from "class-validator"
import { ScholarshipType } from "../../entities"

export class CreateScholarshipDto {

  @IsEnum(ScholarshipType)
  type: ScholarshipType

  @IsString()
  level: string

  @IsDateString()
  assignamentDate
}
