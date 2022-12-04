import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateEmployeeDto {
  @IsString()
  employeeNumber

  @IsString()
  name

  @IsString()
  firstName

  @IsString()
  @IsOptional()
  lastName

  @IsString()
  @IsOptional()
  rfc

  @IsString()
  @IsOptional()
  curp

  @IsNumber()
  hiredYear
}
