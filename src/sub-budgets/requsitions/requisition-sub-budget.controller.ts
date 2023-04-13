import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common"
import { Auth, GetUser } from "../../auth/decorators"
import { RequisitionSubBudgetService } from "./requisition-sub-budget.service"
import { CreateRequisitionSubBudgetDto } from "./dto/create-requisition-sub-budget.dto"
import { User } from "../../auth/entities"
import { FileInterceptor } from "@nestjs/platform-express"

@Controller("sub-budgets")
@Auth()
export class RequisitionSubBudgetController {
  constructor(
    private readonly requisitionSubBudgetService: RequisitionSubBudgetService,
  ) {
  }

  @Post(":id/requisitions")
  @UseInterceptors(FileInterceptor("file"))
  create(
    @Param("id") id: string,
    @Body() createRequisitionSubBudgetDto: CreateRequisitionSubBudgetDto,
    @UploadedFile() file: Express.Multer.File,
    @GetUser() user: User,
  ) {
    return this.requisitionSubBudgetService.create(id, createRequisitionSubBudgetDto, user, file)
  }

  @Get("requisitions/all")
  findAll() {
    return this.requisitionSubBudgetService.findAll()
  }

  @Get("requisitions/dictionary")
  getDictionary() {
    return this.requisitionSubBudgetService.getDictionary()
  }
}
