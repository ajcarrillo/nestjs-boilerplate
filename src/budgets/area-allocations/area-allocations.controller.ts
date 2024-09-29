import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
  ParseUUIDPipe,
  NotFoundException,
} from "@nestjs/common"
import { AreaAllocationsService } from "./area-allocations.service"
import {
  AreaAllocationDto,
  CreateAreaAllocationDto,
  UpdateAreaAllocationDto,
} from "./dto"
import { AreaAllocation } from "../entities/area-allocation.entity"

@Controller("area-allocations")
export class AreaAllocationsController {
  constructor(private readonly areaAllocationService: AreaAllocationsService) {}

  @Post()
  async create(
    @Body() createAreaAllocationDto: CreateAreaAllocationDto
  ): Promise<AreaAllocationDto> {
    const areaAllocation = await this.areaAllocationService.create(
      createAreaAllocationDto
    )
    return this.toDto(areaAllocation)
  }

  @Get()
  async findAll(): Promise<AreaAllocationDto[]> {
    const areaAllocations = await this.areaAllocationService.findAll()

    return areaAllocations.map(this.toDto)
  }

  @Get(":uuid")
  async findOne(@Param("uuid") uuid: string): Promise<AreaAllocationDto> {
    const areaAllocation = await this.areaAllocationService.findOneByUuid(uuid)
    return this.toDto(areaAllocation)
  }

  @Patch(":uuid")
  async update(
    @Param("uuid") uuid: string,
    @Body() updateAreaAllocationDto: UpdateAreaAllocationDto
  ): Promise<AreaAllocationDto> {
    const areaAllocation = await this.areaAllocationService.update(
      uuid,
      updateAreaAllocationDto
    )
    return this.toDto(areaAllocation)
  }

  @Delete(":uuid")
  async remove(@Param("uuid") uuid: string): Promise<void> {
    await this.areaAllocationService.remove(uuid)
  }

  @Get("budget/:budgetId/area/:areaId")
  async findByBudgetAndArea(
    @Param("budgetId", ParseUUIDPipe) budgetId: string,
    @Param("areaId", ParseUUIDPipe) areaId: string
  ) {
    const areaAllocations =
      await this.areaAllocationService.findByBudgetAndArea(budgetId, areaId)

    return this.toDto(areaAllocations)
  }

  private toDto(areaAllocation: AreaAllocation): AreaAllocationDto {
    return {
      uuid: areaAllocation.uuid,
      areaId: areaAllocation.area.id,
      budgetCapId: areaAllocation.budgetCap.uuid,
      totalAmount: +areaAllocation.totalAmount,
    }
  }
}
