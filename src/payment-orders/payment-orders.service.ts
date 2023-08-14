import { BadRequestException, forwardRef, Inject, Injectable } from "@nestjs/common";
import { CreatePaymentOrderDto, UpdatePaymentOrderDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { PaymentOrder } from "./entities"
import { Repository } from "typeorm"
import { PurchaseOrdersService } from "../purchase-orders/purchase-orders.service"
import { User } from "../auth/entities"
import { S3Service } from "../files/s3.service"
import { Requisition } from "../requisitions/entities"
import { RequisitionSubBudget } from "../sub-budgets/entities/requisition-sub-budget.entity"
import { formatDate } from "../utils/date-utils"
import { Area } from "../employees/entities";
import { SubBudget } from "../sub-budgets/entities/sub-budget.entity";

@Injectable()
export class PaymentOrdersService {
  constructor(
    @InjectRepository(PaymentOrder)
    private readonly paymentOrderRepository: Repository<PaymentOrder>,
    @Inject(forwardRef(() => PurchaseOrdersService))
    private readonly purchaseOrderService: PurchaseOrdersService,
    private readonly s3Service: S3Service,
  ) {
  }

  async create(createPaymentOrderDto: CreatePaymentOrderDto, user: User) {
    const {
      payment_number,
      amount,
      payment_date,
      payment_file,
      check_file,
      check_number,
      purchase_order_id,
      is_submitted_to_finance,
    } = createPaymentOrderDto

    const purchaseOrder = await this.purchaseOrderService.findOne(purchase_order_id)

    const paymentOrder = this.paymentOrderRepository.create({
      payment_date,
      amount,
      payment_number,
      purchaseOrder,
      check_number,
      is_submitted_to_finance,
    })

    try {
      if (payment_file !== undefined) {
        const { Key: paymentFileKey } = await this.s3Service.uploadFile(payment_file)
        paymentOrder.payment_file = paymentFileKey
      }

      if (check_file !== undefined) {
        const { Key: checkFileKey } = await this.s3Service.uploadFile(check_file)
        paymentOrder.check_file = checkFileKey
      }
    } catch (e) {
      throw new BadRequestException(`Error uploading file: ${e.message}`)
    }

    paymentOrder.createdBy = user.id

    return this.paymentOrderRepository.save(paymentOrder)
  }

  async findAll(show: 'presupuestos' | 'subpresupuestos') {
    if (show === 'presupuestos') {
      const paymentOrders = await this.paymentOrderRepository
        .createQueryBuilder("po")
        .innerJoinAndSelect("po.purchaseOrder", "por")
        .innerJoinAndSelect(Requisition, "r", "r.id = por.requisition_id AND por.requisitionType = :requisitionType1", { requisitionType1: "RequisitionEntity" })
        .innerJoinAndSelect(Area, "a", "a.id = r.area_id")
        .getRawMany()

      return paymentOrders
    }

    const paymentOrders = await this.paymentOrderRepository
      .createQueryBuilder("po")
      .innerJoinAndSelect("po.purchaseOrder", "por")
      .innerJoinAndSelect(RequisitionSubBudget, "rsb", "rsb.id = por.requisition_id AND por.requisitionType = :requisitionType2", { requisitionType2: "RequisitionSubBudgetEntity" })
      .innerJoinAndSelect(SubBudget, "sb", "sb.id = rsb.sub_budget_id")
      .innerJoinAndSelect(Area, "a", "a.id = rsb.area_id")
      .getRawMany()

    return paymentOrders
  }

  async findOne(id: string) {
    return this.paymentOrderRepository.findOneBy({ id })
  }

  async update(id: string, updatePaymentOrderDto: UpdatePaymentOrderDto, user: User) {
    const {
      payment_number,
      amount,
      payment_date,
      payment_file,
      check_file,
      check_number,
      purchase_order_id,
      is_submitted_to_finance,
    } = updatePaymentOrderDto

    const purchaseOrder = await this.purchaseOrderService.findOne(purchase_order_id)

    const paymentOrderToUpdate = await this.paymentOrderRepository.preload({
      id,
      purchaseOrder,
      payment_number,
      amount,
      payment_date,
      check_number,
      is_submitted_to_finance,
    })

    if (!paymentOrderToUpdate) {
      throw new BadRequestException(`The payment order with id ${id} does not exist`)
    }

    try {
      if (payment_file !== undefined) {
        const { Key: paymentFileKey } = await this.s3Service.uploadFile(payment_file)
        paymentOrderToUpdate.payment_file = paymentFileKey
      }

      if (check_file !== undefined) {
        const { Key: checkFileKey } = await this.s3Service.uploadFile(check_file)
        paymentOrderToUpdate.check_file = checkFileKey
      }
    } catch (e) {
      throw new BadRequestException(`Error uploading file: ${e.message}`)
    }

    paymentOrderToUpdate.updatedBy = user.id

    return this.paymentOrderRepository.save(paymentOrderToUpdate)
  }

  async remove(id: string) {
    const paymentOrder = await this.findOne(id)

    if(!paymentOrder) {
      throw new BadRequestException(`The payment order with id ${id} does not exist`)
    }

    return this.paymentOrderRepository.remove(paymentOrder)
  }
}
