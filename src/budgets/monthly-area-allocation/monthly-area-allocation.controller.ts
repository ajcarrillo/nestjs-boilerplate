import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common"
import { MonthlyAreaAllocationService } from "./monthly-area-allocation.service"
import { Auth } from "src/auth/decorators"
import {
  CreateMonthlyAreaAllocationDto,
  UpdateMonthlyAreaAllocationDto,
} from "./dto"

@Controller("monthly-area-allocation")
@Auth()
export class MonthlyAreaAllocationController {
  constructor(
    private readonly monthlyBudgetAllocationService: MonthlyAreaAllocationService
  ) {}

  @Get(":uuid")
  async findAll(
    @Param("uuid", ParseUUIDPipe) uuid: string,
    @Query("budgetYear", ParseIntPipe) budgetYear: number
  ) {
    const entities = await this.monthlyBudgetAllocationService.findAll(
      uuid,
      budgetYear
    )

    return entities.map((entity) =>
      this.monthlyBudgetAllocationService.toDto(entity)
    )
  }

  @Post()
  async create(
    @Body() dto: CreateMonthlyAreaAllocationDto,
    @Query("budgetYear", ParseIntPipe) budgetYear: number
  ) {
    const entity = await this.monthlyBudgetAllocationService.create(
      dto,
      budgetYear
    )

    return this.monthlyBudgetAllocationService.toDto(entity)
  }

  @Patch(":uuid")
  async update(
    @Param("uuid", ParseUUIDPipe) uuid: string,
    @Body() dto: UpdateMonthlyAreaAllocationDto
  ) {
    const entity = await this.monthlyBudgetAllocationService.update(uuid, dto)

    return this.monthlyBudgetAllocationService.toDto(entity)
  }

  @Get()
  async getAll(@Query("budgetYear", ParseIntPipe) budgetYear: number) {
    const entities =
      await this.monthlyBudgetAllocationService.getAll(budgetYear)

    return entities.map((entity) =>
      this.monthlyBudgetAllocationService.toDtoWithArea(entity)
    )
  }
}
