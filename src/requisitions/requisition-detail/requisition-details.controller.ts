import { Body, Controller, Delete, Param, Post } from "@nestjs/common"
import { RequisitionDetailsService } from "./requisition-details.service"
import { CreateRequisitionDetailDto } from "./dto"

@Controller("requisitions/:id/details")
export class RequisitionDetailsController {
  constructor(
    private readonly requisitionDetailsService: RequisitionDetailsService,
  ) {}

  @Post()
  create(
    @Param("id") requisitionId: string,
    @Body() createRequisitionDetailDto: CreateRequisitionDetailDto
  ) {
    return this.requisitionDetailsService.create(requisitionId, createRequisitionDetailDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.requisitionDetailsService.remove(id)
  }
}
