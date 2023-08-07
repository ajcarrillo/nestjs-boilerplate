import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreatePurchaseOrderDto, UpdatePurchaseOrderDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { PurchaseOrder } from "./entities"
import { Repository } from "typeorm"
import { RequisitionsService } from "../requisitions/requisitions.service"
import { User } from "../auth/entities"
import { RequisitionSubBudgetService } from "../sub-budgets/requsitions/requisition-sub-budget.service"
import { Requisition } from "../requisitions/entities"
import { RequisitionSubBudget } from "../sub-budgets/entities/requisition-sub-budget.entity"
import { formatDate } from "../utils/date-utils"

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private readonly purchaseOrderRepository: Repository<PurchaseOrder>,
    private readonly requisitionService: RequisitionsService,
    private readonly requisitionSubBudgetService: RequisitionSubBudgetService,
  ) {
  }

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto, user: User) {
    const requisition = await this.requisitionService.findOne(createPurchaseOrderDto.requisition_id)

    if (!requisition) {
      throw new NotFoundException(`The requisition with id ${createPurchaseOrderDto.requisition_id} does not exist`)
    }

    const purchaseOrder = this.purchaseOrderRepository.create({
      ...createPurchaseOrderDto,
      requisitionType: "RequisitionEntity",
      createdBy: user.id,
    })

    return this.purchaseOrderRepository.save(purchaseOrder)
  }

  async createPurchaseOrderRequisitionSubBudget(createPurchaseOrderDto: CreatePurchaseOrderDto, user: User) {
    const requisition = await this.requisitionSubBudgetService.findOne(createPurchaseOrderDto.requisition_id)

    if (!requisition) {
      throw new NotFoundException(`The requisition with id ${createPurchaseOrderDto.requisition_id} does not exist`)
    }

    const purchaseOrder = this.purchaseOrderRepository.create({
      ...createPurchaseOrderDto,
      requisitionType: "RequisitionSubBudgetEntity",
      createdBy: user.id,
    })

    return this.purchaseOrderRepository.save(purchaseOrder)
  }

  async findAll() {
    const rawResult = await this.purchaseOrderRepository
      .createQueryBuilder("purchase_order")
      .addSelect("r.*")
      .addSelect("a.*")
      .innerJoin(Requisition, "r", "purchase_order.requisition_id = r.id AND purchase_order.requisitionType = :requisitionType1", {
        requisitionType1: "RequisitionEntity",
      })
      .innerJoin("r.area", "a", "a.id = r.area_id")
      .getRawMany()

    return rawResult.map(row => ({
      id: row.purchase_order_id,
      order_number: row.purchase_order_order_number,
      reception_date: formatDate(row.purchase_order_reception_date),
      file: row.purchase_order_file,
      requisition_type: row.purchase_order_requisition_type,
      requisition: {
        id: row.id,
        requisition_number: row.requisition_number,
        estimated_amount: row.estimated_amount,
        preparation_date: formatDate(row.preparation_date),
        processing_date: formatDate(row.processing_date),
        file: row.file,
        area_id: row.area_id,
        area: {
          id: row.area_id,
          name: row.description,
        }
      },
    }))
  }

  async findAllWithRequisitionSubBudget() {
    const rawResult = await this.purchaseOrderRepository
      .createQueryBuilder("purchase_order")
      .addSelect("r.*")
      .addSelect("a.*")
      .addSelect("sb.*")
      .innerJoin(RequisitionSubBudget, "r", "purchase_order.requisition_id = r.id AND purchase_order.requisitionType = :requisitionType1", {
        requisitionType1: "RequisitionSubBudgetEntity",
      })
      .innerJoin("r.subBudget", "sb", "sb.id = r.sub_budget_id")
      .innerJoin("r.area", "a", "a.id = r.area_id")
      .getRawMany()

    return rawResult.map(row => ({
      id: row.purchase_order_id,
      order_number: row.purchase_order_order_number,
      reception_date: formatDate(row.purchase_order_reception_date),
      file: row.purchase_order_file,
      requisition_type: row.purchase_order_requisition_type,
      event: row.event,
      requisition: {
        id: row.id,
        requisition_number: row.requisition_number,
        estimated_amount: row.estimated_amount,
        preparation_date: formatDate(row.preparation_date),
        processing_date: formatDate(row.processing_date),
        file: row.file,
        area_id: row.area_id,
        area: {
          id: row.area_id,
          name: row.description,
        }
      },
    }))
  }

  async findOne(id: string) {
    return await this.purchaseOrderRepository.findOneBy({ id })
  }

  async update(id: string, updatePurchaseOrderDto: UpdatePurchaseOrderDto, user: User) {
    const { ...purchaseOrder } = updatePurchaseOrderDto

    const purchaseOrderToUpdate = await this.purchaseOrderRepository.preload({
      id,
      updatedBy: user.id,
      ...purchaseOrder,
    })

    if (!purchaseOrderToUpdate) {
      throw new BadRequestException(`The purchase order with id ${id} does not exist`)
    }

    return this.purchaseOrderRepository.save(purchaseOrderToUpdate)
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseOrder`
  }

  async updateFileName(id: string, fileName: string) {
    const purchaseOrder = await this.findOne(id)

    if (!purchaseOrder) {
      throw new BadRequestException(`The purchase order with id ${id} does not exist`)
    }

    purchaseOrder.file = fileName

    return this.purchaseOrderRepository.save(purchaseOrder)
  }

  async getDictionary() {
    const purchaseOrders = await this.purchaseOrderRepository.find()

    return purchaseOrders.map(purchaseOrder => ({
      value: purchaseOrder.id,
      label: purchaseOrder.order_number,
    }))
  }
}
