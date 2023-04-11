import { BadRequestException, Injectable } from "@nestjs/common"
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

@Injectable()
export class PaymentOrdersService {
  constructor(
    @InjectRepository(PaymentOrder)
    private readonly paymentOrderRepository: Repository<PaymentOrder>,
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

  async findAll() {
    // return this.paymentOrderRepository.find({
    //   relations: ["purchaseOrder"],
    // })

    // const paymentOrders = await this.paymentOrderRepository
    //   .createQueryBuilder("paymentOrder")
    //   .leftJoinAndSelect("paymentOrder.purchaseOrder", "purchaseOrder")
    //   .leftJoinAndSelect(Requisition, "requisition", "requisition.id = purchaseOrder.requisition_id AND purchaseOrder.requisitionType = :requisitionType1", { requisitionType1: "RequisitionEntity" })
    //   .leftJoinAndSelect(RequisitionSubBudget, "requisitionSubBudget", "requisitionSubBudget.id = purchaseOrder.requisition_id AND purchaseOrder.requisitionType = :requisitionType2", { requisitionType2: "RequisitionSubBudgetEntity" })
    //   .getMany()
    //
    // return paymentOrders.map(paymentOrder => {
    //   const { purchaseOrder } = paymentOrder
    //   const { requisition, requisitionSubBudget } = purchaseOrder
    //
    //   return {
    //     ...paymentOrder,
    //     purchaseOrder: {
    //       ...purchaseOrder,
    //       requisition: purchaseOrder.requisitionType === "RequisitionEntity" ? requisition : requisitionSubBudget,
    //     },
    //   }
    // })

    const paymentOrders = await this.paymentOrderRepository
      .createQueryBuilder("paymentOrder")
      .leftJoinAndSelect("paymentOrder.purchaseOrder", "purchaseOrder")
      .leftJoinAndSelect(Requisition, "requisition", "requisition.id = purchaseOrder.requisition_id AND purchaseOrder.requisitionType = :requisitionType1", { requisitionType1: "RequisitionEntity" })
      .leftJoinAndSelect(RequisitionSubBudget, "requisitionSubBudget", "requisitionSubBudget.id = purchaseOrder.requisition_id AND purchaseOrder.requisitionType = :requisitionType2", { requisitionType2: "RequisitionSubBudgetEntity" })
      .addSelect("CASE purchaseOrder.requisitionType WHEN 'RequisitionEntity' THEN 'requisition' ELSE 'requisitionSubBudget' END", "requisitionSource")
      .getRawMany()

    return paymentOrders.map(row => {
      const paymentOrder = {
        createdAt: row.paymentOrder_created_at,
        updatedAt: row.paymentOrder_updated_at,
        createdBy: row.paymentOrder_created_by,
        updatedBy: row.paymentOrder_updated_by,
        id: row.paymentOrder_id,
        payment_number: row.paymentOrder_payment_number,
        amount: row.paymentOrder_amount,
        payment_date: formatDate(row.paymentOrder_payment_date),
        payment_file: row.paymentOrder_payment_file,
        check_file: row.paymentOrder_check_file,
        check_number: row.paymentOrder_check_number,
        is_submitted_to_finance: row.paymentOrder_is_submitted_to_finance,
        purchaseOrder: {
          createdAt: row.purchaseOrder_created_at,
          updatedAt: row.purchaseOrder_updated_at,
          createdBy: row.purchaseOrder_created_by,
          updatedBy: row.purchaseOrder_updated_by,
          id: row.purchaseOrder_id,
          requisition_id: row.purchaseOrder_requisition_id,
          order_number: row.purchaseOrder_order_number,
          reception_date: formatDate(row.purchaseOrder_reception_date),
          file: row.purchaseOrder_file,
          requisitionType: row.purchaseOrder_requisition_type,
        },
      }

      if (row.requisitionSource === "requisition") {
        // @ts-ignore
        paymentOrder.purchaseOrder.requisition = {
          id: row.requisition_id,
          requisition_number: row.requisition_requisition_number,
          estimated_amount: row.requisition_estimated_amount,
          preparation_date: formatDate(row.requisition_preparation_date),
          processing_date: formatDate(row.requisition_processing_date),
          file: row.requisition_file,
          area_id: row.requisition_area_id,
        }
      } else {
        // @ts-ignore
        paymentOrder.purchaseOrder.requisition = {
          createdAt: row.requisitionSubBudget_created_at,
          updatedAt: row.requisitionSubBudget_updated_at,
          createdBy: row.requisitionSubBudget_created_by,
          updatedBy: row.requisitionSubBudget_updated_by,
          id: row.requisitionSubBudget_id,
          requisition_number: row.requisitionSubBudget_requisition_number,
          estimated_amount: row.requisitionSubBudget_estimated_amount,
          preparation_date: formatDate(row.requisitionSubBudget_preparation_date),
          processing_date: formatDate(row.requisitionSubBudget_processing_date),
          file: row.requisitionSubBudget_file,
          area_id: row.requisitionSubBudget_area_id,
          sub_budget_id: row.requisitionSubBudget_sub_budget_id,
        }
      }

      return paymentOrder
    })
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

  remove(id: number) {
    return `This action removes a #${id} paymentOrder`
  }
}
