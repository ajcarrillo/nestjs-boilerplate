import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateRequisitionDto, UpdateRequisitionDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Requisition } from "./entities"
import { DataSource, Repository } from "typeorm"
import { isUUID } from "class-validator"
import { AreasService } from "../employees/areas/areas.service"
import { PaginateCollectionDto } from "../common/dto"
import { RequisitionDictionaryDto } from "./dto/requisition-dictionary.dto"
import { PurchaseOrder } from "../purchase-orders/entities";
import { PaymentOrder } from "../payment-orders/entities";

@Injectable()
export class RequisitionsService {

  constructor(
    @InjectRepository(Requisition)
    private readonly requisitionRepository: Repository<Requisition>,
    private readonly areaService: AreasService,
    private readonly dataSource: DataSource,
  ) {
  }

  async create(createRequisitionDto: CreateRequisitionDto, budgetYear: string) {
    const existsNumberRequisition = await this.requisitionRepository.findOneBy({ requisition_number: createRequisitionDto.requisition_number })
    const area = await this.areaService.findOne(createRequisitionDto.area_id)

    if (existsNumberRequisition) {
      throw new BadRequestException(`El número de requisición ${createRequisitionDto.requisition_number} ya existe`)
    }

    if (!area) {
      throw new BadRequestException(`El área con el id ${createRequisitionDto.area_id} no existe`)
    }

    const requisition = this.requisitionRepository.create({ ...createRequisitionDto, area, budget_year: budgetYear })

    return this.requisitionRepository.save(requisition)
  }

  findAll(budgetYear: string) {
    return this.requisitionRepository.find({
      where: {
        budget_year: budgetYear
      }
    })
  }

  async findOne(id: string) {
    let requisition: Requisition

    if (isUUID(id)) {
      requisition = await this.requisitionRepository.findOne({
        where: { id },
        relations: ["details", "details.budgetDetail"],
      })
    } else {
      requisition = await this.requisitionRepository
        .findOne({
          where: { requisition_number: id },
          relations: ["details", "details.budgetDetail"],
        })
    }

    if (!requisition) {
      throw new NotFoundException(`La requisición con el id ${id} no existe`)
    }

    requisition.estimated_amount = Number(requisition.estimated_amount)

    return requisition
  }

  async update(id: string, updateRequisitionDto: UpdateRequisitionDto) {
    const { requisition_number } = updateRequisitionDto

    if (requisition_number) {
      const isRequisitionNumberTaken = await this.isRequisitionNumberTaken(requisition_number, id)

      if (isRequisitionNumberTaken) {
        throw new BadRequestException("El número de requisición ya está en uso.")
      }
    }

    let area;
    const { area_id } = updateRequisitionDto

    if (area_id) {
      area = await this.areaService.findOne(area_id)

      if (!area) {
        throw new BadRequestException(`El área con el id ${area_id} no existe`)
      }
    }

    const requisitionToUpdate = await this.requisitionRepository.preload({
      id,
      ...updateRequisitionDto,
      area
    })

    if (!requisitionToUpdate) {
      throw new NotFoundException(`La requisición con el id ${id} no existe`)
    }

    return this.requisitionRepository.save(requisitionToUpdate)
  }

  async remove(id: string) {
    await this.dataSource.transaction(async (entityManager) => {
      const requisition = await entityManager.findOneBy(Requisition, { id })

      if (!requisition) {
        throw new NotFoundException(`La requisición con el id ${id} no existe`)
      }

      const purchaseOrder = await entityManager.findOneBy(PurchaseOrder, {
        id,
        requisitionType: 'RequisitionEntity',
      })

      if (purchaseOrder) {
        await entityManager.delete(PaymentOrder, {
          purchaseOrder: { id: purchaseOrder.id }
        })

        await entityManager.remove(purchaseOrder)
      }

      await entityManager.remove(requisition)
    })
  }

  async updateFileName(id: string, filename: string) {
    const requisition = await this.findOne(id)

    requisition.file = filename

    return this.requisitionRepository.save(requisition)
  }

  async getDictionary(params: PaginateCollectionDto, budgetYear: string): Promise<RequisitionDictionaryDto[] | {
    items: RequisitionDictionaryDto[],
    total: number
  }> {
    const qb = this.requisitionRepository
      .createQueryBuilder("requisition")
      .innerJoin("requisition.area", "area")
      .where("requisition.budget_year = :budgetYear", { budgetYear })
      .select(["requisition.id", "requisition.requisition_number", "area.description"])
      .orderBy("requisition.requisition_number", "DESC")

    if (params.withoutPagination) {
      const page = params.page || 1
      const pageSize = params.pageSize || 10

      const [result, total] = await qb
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .getManyAndCount()

      const items = this.getItems(result)

      return { items, total }
    } else {
      const result = await qb.getMany()

      return this.getItems(result)
    }
  }

  private getItems(result: Requisition[]) {
    return result.map(r => ({
      id: r.id,
      area_description: r.area.description,
      requisition_number: r.requisition_number,
    }))
  }

  private async isRequisitionNumberTaken(requisition_number: string, excludedRequisitionId: string): Promise<boolean> {
    const count = await this.requisitionRepository
      .createQueryBuilder("requisition")
      .where("requisition.requisition_number = :requisition_number", { requisition_number })
      .andWhere("requisition.id != :excludedRequisitionId", { excludedRequisitionId })
      .getCount()

    return count > 0
  }
}
