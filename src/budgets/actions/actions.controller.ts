import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { ActionsService } from "./actions.service"
import { CreateActionDto, UpdateActionDto } from "./dto"

@Controller('actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Post()
  create(@Body() createActionDto: CreateActionDto) {
    return this.actionsService.create(createActionDto);
  }

  @Get()
  findAll() {
    return this.actionsService.findAll();
  }

  @Get('dictionary')
  getDictionary() {
    return this.actionsService.getDictionary();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actionsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateActionDto: UpdateActionDto) {
    return this.actionsService.update(+id, updateActionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actionsService.remove(+id);
  }
}
