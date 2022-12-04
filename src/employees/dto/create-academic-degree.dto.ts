import { IsString } from "class-validator"

export class CreateAcademicDegreeDto {
  @IsString()
  abbreviatedGrade

  @IsString()
  grade

  @IsString()
  career

  @IsString()
  license
}
