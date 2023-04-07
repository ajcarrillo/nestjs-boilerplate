import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common"
import { SubBudgetsService } from "./sub-budgets.service"
import { CreateSubBudgetDto, UpdateSubBudgetDto } from "./dto"
import { Auth, GetUser } from "../auth/decorators"
import { User } from "../auth/entities"

@Controller('sub-budgets')
@Auth()
export class SubBudgetsController {
  constructor(private readonly subBudgetsService: SubBudgetsService) {}

  @Post()
  create(
    @Body() createSubBudgetDto: CreateSubBudgetDto,
    @GetUser() user: User,
  ) {
    return this.subBudgetsService.create(createSubBudgetDto, user);
  }

  @Get()
  findAll() {
    return this.subBudgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subBudgetsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubBudgetDto: UpdateSubBudgetDto,
    @GetUser() user: User
  ) {
    return this.subBudgetsService.update(id, updateSubBudgetDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subBudgetsService.remove(id);
  }
}
