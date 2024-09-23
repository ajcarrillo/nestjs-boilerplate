import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from "@nestjs/common"
import { PurchaseOrdersService } from "./purchase-orders.service"
import { CreatePurchaseOrderDto, UpdatePurchaseOrderDto } from "./dto"
import { Auth, GetUser } from "../auth/decorators"
import { User } from "../auth/entities"
import { BudgetYear } from "../common/decorators"

@Controller("purchase-orders")
@Auth()
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Post()
  create(
    @BudgetYear() budgetYear: string,
    @Body() createPurchaseOrderDto: CreatePurchaseOrderDto,
    @GetUser() user: User
  ) {
    return this.purchaseOrdersService.create(
      createPurchaseOrderDto,
      user,
      budgetYear
    )
  }

  @Post("/requisition-sub-budget")
  createPurchaseOrderRequisitionSubBudget(
    @BudgetYear() budgetYear: string,
    @Body() createPurchaseOrderDto: CreatePurchaseOrderDto,
    @GetUser() user: User
  ) {
    return this.purchaseOrdersService.createPurchaseOrderRequisitionSubBudget(
      createPurchaseOrderDto,
      user,
      budgetYear
    )
  }

  @Get("/requisition-sub-budget")
  findAllWithRequisitionSubBudget(@BudgetYear() budgetYear: string) {
    return this.purchaseOrdersService.findAllWithRequisitionSubBudget(
      budgetYear
    )
  }

  @Get()
  findAll(@BudgetYear() budgetYear: string) {
    return this.purchaseOrdersService.findAll(budgetYear)
  }

  @Get("dictionary")
  getDictionary(@BudgetYear() budgetYear: string) {
    return this.purchaseOrdersService.getDictionary(budgetYear)
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.purchaseOrdersService.findOne(id)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto,
    @GetUser() user: User
  ) {
    return this.purchaseOrdersService.update(id, updatePurchaseOrderDto, user)
  }

  @Delete(":id")
  async remove(
    @Param("id") id: string,
    @Query("requisitionType")
    requisitionType: "RequisitionEntity" | "RequisitionSubBudgetEntity"
  ): Promise<any> {
    try {
      await this.purchaseOrdersService.remove(id, requisitionType)
      return {
        statusCode: HttpStatus.NO_CONTENT,
        message: "Deleted successfully",
      }
    } catch (error) {
      throw new HttpException(
        error.message || "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
