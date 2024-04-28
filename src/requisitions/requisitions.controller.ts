import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common"
import { RequisitionsService } from "./requisitions.service"
import { CreateRequisitionDto, UpdateRequisitionDto } from "./dto"
import { PaginateCollectionDto } from "../common/dto"
import { Auth } from "../auth/decorators"
import { BudgetYear } from "../common/decorators";

@Controller('requisitions')
@Auth()
export class RequisitionsController {
  constructor(private readonly requisitionsService: RequisitionsService) {}

  @Post()
  create(
    @BudgetYear() budgetYear: string,
    @Body() createRequisitionDto: CreateRequisitionDto
  ) {
    return this.requisitionsService.create(createRequisitionDto, budgetYear);
  }

  @Get()
  findAll(@BudgetYear() budgetYear: string) {
    return this.requisitionsService.findAll(budgetYear);
  }

  @Get('dictionary')
  getDictionary(
    @BudgetYear() budgetYear: string,
    @Query() params: PaginateCollectionDto
  ) {
    return this.requisitionsService.getDictionary(params, budgetYear);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requisitionsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRequisitionDto: UpdateRequisitionDto) {
    return this.requisitionsService.update(id, updateRequisitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requisitionsService.remove(id);
  }
}
