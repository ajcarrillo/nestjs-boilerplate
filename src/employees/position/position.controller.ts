import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common"
import { PositionService } from "./position.service"
import { CreatePositionDto, UpdatePositionDto } from "./dto"

@Controller("employees/:employeeId")
export class PositionController {

  constructor(
    private readonly positionService: PositionService,
  ) {
  }

  @Post("positions")
  create(
    @Param("employeeId") employeeId: string,
    @Body() createPositionDto: CreatePositionDto,
  ) {
    return this.positionService.create(employeeId, createPositionDto)
  }

  @Patch("positions/:id")
  update(
    @Param("id") id: string,
    @Param("employeeId") employeeId: string,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionService.update(id, employeeId, updatePositionDto)
  }

  @Delete("positions/:id")
  remove(
    @Param("id") id: string,
    @Param("employeeId") employeeId: string,
  ) {
    return this.positionService.remove(id, employeeId)
  }

}
