import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Auth, GetUser } from "../../auth/decorators";
import { RequisitionSubBudgetService } from "./requisition-sub-budget.service";
import { CreateRequisitionSubBudgetDto } from "./dto/create-requisition-sub-budget.dto";
import { User } from "../../auth/entities";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateRequisitionEventDto } from "./dto/update-requisition-event.dto";

@Controller("sub-budgets")
@Auth()
export class RequisitionSubBudgetController {
  constructor(
    private readonly requisitionSubBudgetService: RequisitionSubBudgetService
  ) {
  }

  @Post(":id/requisitions")
  @UseInterceptors(FileInterceptor("file"))
  create(
    @Param("id") id: string,
    @Body() createRequisitionSubBudgetDto: CreateRequisitionSubBudgetDto,
    @UploadedFile() file: Express.Multer.File,
    @GetUser() user: User
  ) {
    return this.requisitionSubBudgetService.create(id, createRequisitionSubBudgetDto, user, file);
  }

  @Get(":id/requisitions/:requisitionId")
  findOne(@Param("requisitionId") id: string) {
    return this.requisitionSubBudgetService.findOne(id);
  }

  @Patch(":id/requisitions/:requisitionId/update-event")
  updateEvent(
    @Param("requisitionId") id: string,
    @Body() updateRequisitionEventDto: UpdateRequisitionEventDto,
    @GetUser() user: User
  ) {
    return this.requisitionSubBudgetService.updateEvent(id, updateRequisitionEventDto, user);
  }

  @Patch(":id/requisitions/:requisitionId")
  @UseInterceptors(FileInterceptor("file"))
  update(
    @Param("requisitionId") id: string,
    @Body() createRequisitionSubBudgetDto: CreateRequisitionSubBudgetDto,
    @UploadedFile() file: Express.Multer.File,
    @GetUser() user: User
  ) {
    return this.requisitionSubBudgetService.update(id, createRequisitionSubBudgetDto, user, file);
  }

  @Get("requisitions/all")
  findAll(@Query("budget_year") budget_year: string) {
    return this.requisitionSubBudgetService.findAll(+budget_year);
  }

  @Get("requisitions/dictionary")
  getDictionary() {
    return this.requisitionSubBudgetService.getDictionary();
  }

  @Delete(":id/requisitions/:requisitionId")
  remove(@Param("requisitionId") id: string) {
    return this.requisitionSubBudgetService.remove(id);
  }
}
