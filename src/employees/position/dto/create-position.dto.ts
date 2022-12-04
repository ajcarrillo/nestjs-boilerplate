import { IsEnum, IsString } from "class-validator"
import { PositionType } from "../../entities"

export class CreatePositionDto {
  @IsString()
  description: string

  @IsString()
  movementType: string

  @IsEnum(PositionType)
  positionType: PositionType
}
