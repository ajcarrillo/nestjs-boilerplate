import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { PurchaseOrdersService } from "./purchase-orders.service"
import { CreatePurchaseOrderDto, UpdatePurchaseOrderDto } from "./dto"
import { Auth, GetUser } from "../auth/decorators"
import { User } from "../auth/entities"

@Controller("purchase-orders")
@Auth()
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {
  }

  @Post()
  create(
    @Body() createPurchaseOrderDto: CreatePurchaseOrderDto,
    @GetUser() user: User,
  ) {
    return this.purchaseOrdersService.create(createPurchaseOrderDto, user)
  }

  @Post("/requisition-sub-budget")
  createPurchaseOrderRequisitionSubBudget(
    @Body() createPurchaseOrderDto: CreatePurchaseOrderDto,
    @GetUser() user: User,
  ) {
    return this.purchaseOrdersService.createPurchaseOrderRequisitionSubBudget(createPurchaseOrderDto, user)
  }

  @Get("/requisition-sub-budget")
  findAllWithRequisitionSubBudget() {
    return this.purchaseOrdersService.findAllWithRequisitionSubBudget()
  }

  @Get()
  findAll() {
    return this.purchaseOrdersService.findAll()
  }

  @Get("dictionary")
  getDictionary() {
    return this.purchaseOrdersService.getDictionary()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.purchaseOrdersService.findOne(id)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto,
    @GetUser() user: User,
  ) {
    return this.purchaseOrdersService.update(id, updatePurchaseOrderDto, user)
  }

  @Delete(":id")
  async remove(
    @Param("id") id: string,
    @Query("requisitionType") requisitionType: "RequisitionEntity" | "RequisitionSubBudgetEntity"
  ): Promise<any> {
    try {
      await this.purchaseOrdersService.remove(id, requisitionType);
      return { statusCode: HttpStatus.NO_CONTENT, message: 'Deleted successfully' };
    } catch (error) {
      throw new HttpException(error.message || 'Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
