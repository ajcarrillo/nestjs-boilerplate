import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common"
import { CreateBudgetCapDto } from "./dto/create-budget-cap.dto"
import { UpdateBudgetCapDto } from "./dto/update-budget-cap.dto"
import { BudgetCapsService } from "./budget-caps.service"

@Controller("budget-caps")
export class BudgetCapsController {
  constructor(private readonly budgetCapService: BudgetCapsService) {}

  @Post()
  create(@Body() createBudgetCapDto: CreateBudgetCapDto) {
    return this.budgetCapService.create(createBudgetCapDto)
  }

  @Get()
  findAll() {
    return this.budgetCapService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") uuid: string) {
    return this.budgetCapService.findOne(uuid)
  }

  @Patch(":id")
  update(
    @Param("id") uuid: string,
    @Body() updateBudgetCapDto: UpdateBudgetCapDto
  ) {
    return this.budgetCapService.update(uuid, updateBudgetCapDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.budgetCapService.remove(+id)
  }
}
