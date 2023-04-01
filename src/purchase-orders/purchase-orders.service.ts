import { BadRequestException, Injectable } from "@nestjs/common"
import { CreatePurchaseOrderDto, UpdatePurchaseOrderDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { PurchaseOrder } from "./entities"
import { Repository } from "typeorm"
import { RequisitionsService } from "../requisitions/requisitions.service"
import { User } from "../auth/entities"

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private readonly purchaseOrderRepository: Repository<PurchaseOrder>,
    private readonly requisitionService: RequisitionsService,
  ) {
  }

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto, user: User) {
    const requisition = await this.requisitionService.findOne(createPurchaseOrderDto.requisition_id)
    const purchaseOrder = this.purchaseOrderRepository.create({
      ...createPurchaseOrderDto,
      requisition,
      createdBy: user.id,
    })

    return this.purchaseOrderRepository.save(purchaseOrder)
  }

  findAll() {
    return this.purchaseOrderRepository.find({
      relations: {
        requisition: true
      }
    })
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

    if(!purchaseOrderToUpdate) {
      throw new BadRequestException(`The purchase order with id ${id} does not exist`)
    }

    return this.purchaseOrderRepository.save(purchaseOrderToUpdate)
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseOrder`;
  }

  async updateFileName(id: string, fileName: string) {
    const purchaseOrder = await this.findOne(id)

    if(!purchaseOrder) {
      throw new BadRequestException(`The purchase order with id ${id} does not exist`)
    }

    purchaseOrder.file = fileName

    return this.purchaseOrderRepository.save(purchaseOrder)
  }
}
