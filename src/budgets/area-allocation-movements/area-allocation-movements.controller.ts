import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from "@nestjs/common"
import { Auth, GetUser } from "src/auth/decorators"
import { AreaAllocationMovementsService } from "./area-allocation-movements.service"
import { User } from "src/auth/entities"
import { CreateAreaAllocationMovementDto } from "./dto"

@Controller("area-allocations/:areaAllocationUuid/movements")
@Auth()
export class AreaAllocationMovementsController {
  constructor(
    private readonly areaAllocationMovementsService: AreaAllocationMovementsService
  ) {}

  @Post()
  async create(
    @Param("areaAllocationUuid", ParseUUIDPipe) areaAllocationUuid: string,
    @Body() createDto: CreateAreaAllocationMovementDto,
    @GetUser() user: User
  ) {
    const areaAllocationMovements =
      await this.areaAllocationMovementsService.create(
        areaAllocationUuid,
        createDto,
        user
      )

    return this.areaAllocationMovementsService.toDto(areaAllocationMovements)
  }

  @Get()
  async findAll(
    @Param("areaAllocationUuid", ParseUUIDPipe) areaAllocationUuid: string
  ) {
    const areaAllocationMovements =
      await this.areaAllocationMovementsService.findAllByAreaAllocationUuid(
        areaAllocationUuid
      )

    return areaAllocationMovements.map((movement) => {
      return this.areaAllocationMovementsService.toDto(movement)
    })
  }

  @Delete(":movementUuid")
  async delete(@Param("movementUuid", ParseUUIDPipe) movementUuid: string) {
    await this.areaAllocationMovementsService.delete(movementUuid)
  }
}
