import { BadRequestException, Injectable } from "@nestjs/common"
import { CreatePaymentOrderDto, UpdatePaymentOrderDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { PaymentOrder } from "./entities"
import { Repository } from "typeorm"
import { PurchaseOrdersService } from "../purchase-orders/purchase-orders.service"
import { User } from "../auth/entities"
import { S3Service } from "../files/s3.service"

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
      is_submitted_to_finance
    } = createPaymentOrderDto

    const purchaseOrder = await this.purchaseOrderService.findOne(purchase_order_id)

    const paymentOrder = this.paymentOrderRepository.create({
      payment_date,
      amount,
      payment_number,
      purchaseOrder,
      check_number,
      is_submitted_to_finance
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
    return this.paymentOrderRepository.find({
      relations: ["purchaseOrder", "purchaseOrder.requisition"],
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
      is_submitted_to_finance
    } = updatePaymentOrderDto

    const purchaseOrder = await this.purchaseOrderService.findOne(purchase_order_id)

    const paymentOrderToUpdate = await this.paymentOrderRepository.preload({
      id,
      purchaseOrder,
      payment_number,
      amount,
      payment_date,
      check_number,
      is_submitted_to_finance
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
