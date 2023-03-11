import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { RequisitionsService } from "./requisitions.service"
import { CreateRequisitionDto, UpdateRequisitionDto } from "./dto"

@Controller('requisitions')
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
    return this.requisitionsService.remove(+id);
  }
}
