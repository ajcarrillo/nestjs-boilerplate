import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { LinesService } from "./lines.service"
import { CreateLineDto, UpdateLineDto } from "./dto"

@Controller("lines")
export class LinesController {
  constructor(private readonly linesService: LinesService) {
  }

  @Post()
  create(@Body() createLineDto: CreateLineDto) {
    return this.linesService.create(createLineDto)
  }

  @Get()
  findAll() {
    return this.linesService.findAll()
  }

  @Get("dictionary")
  getDictionary() {
    return this.linesService.getDictionary()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.linesService.findOne(+id)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateLineDto: UpdateLineDto) {
    return this.linesService.update(+id, updateLineDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.linesService.remove(+id)
  }
}
