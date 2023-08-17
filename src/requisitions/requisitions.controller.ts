import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common"
import { RequisitionsService } from "./requisitions.service"
import { CreateRequisitionDto, UpdateRequisitionDto } from "./dto"
import { PaginateCollectionDto } from "../common/dto"
import { Auth } from "../auth/decorators"

@Controller('requisitions')
@Auth()
export class RequisitionsController {
  constructor(private readonly requisitionsService: RequisitionsService) {}

  @Post()
  create(@Body() createRequisitionDto: CreateRequisitionDto) {
    return this.requisitionsService.create(createRequisitionDto);
  }

  @Get()
  findAll() {
    return this.requisitionsService.findAll();
  }

  @Get('dictionary')
  getDictionary(@Query() params: PaginateCollectionDto) {
    return this.requisitionsService.getDictionary(params);
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
