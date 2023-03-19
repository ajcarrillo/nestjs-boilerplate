import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common"
import { AreasService } from "./areas.service"
import { CreateAreaDto } from "./dto/create-area.dto"
import { UpdateAreaDto } from "./dto/update-area.dto"

@Controller("areas")
export class AreasController {
  constructor(private readonly areasService: AreasService) {
  }

  @Post()
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areasService.create(createAreaDto)
  }

  @Get()
  findAll() {
    return this.areasService.findAll()
  }

  @Get("dictionary")
  getDictionary(@Query("withFullName") withFullName = false) {
    return this.areasService.getDictionary(withFullName)
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.areasService.findOne(id)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areasService.update(id, updateAreaDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.areasService.remove(id)
  }
}
