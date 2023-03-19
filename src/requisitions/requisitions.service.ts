import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateRequisitionDto, UpdateRequisitionDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Requisition } from "./entities/requisition.entity"
import { Repository } from "typeorm"
import { isUUID } from "class-validator"
import { AreasService } from "../employees/areas/areas.service"

@Injectable()
export class RequisitionsService {

  constructor(
    @InjectRepository(Requisition)
    private readonly requisitionRepository: Repository<Requisition>,
    private readonly areaService: AreasService,
  ) {
  }

  async create(createRequisitionDto: CreateRequisitionDto) {
    const existsNumberRequisition = await this.requisitionRepository.findOneBy({ requisition_number: createRequisitionDto.requisition_number })
    const area = await this.areaService.findOne(createRequisitionDto.area_id)

    if (existsNumberRequisition) {
      throw new BadRequestException(`El número de requisición ${createRequisitionDto.requisition_number} ya existe`)
    }

    if(!area) {
      throw new BadRequestException(`El área con el id ${createRequisitionDto.area_id} no existe`)
    }

    const requisition = this.requisitionRepository.create({ ...createRequisitionDto, area })

    return this.requisitionRepository.save(requisition)
  }

  findAll() {
    return this.requisitionRepository.find()
  }

  async findOne(id: string) {
    let requisition: Requisition

    if (isUUID(id)) {
      requisition = await this.requisitionRepository.findOneBy({ id })
    } else {
      requisition = await this.requisitionRepository.findOneBy({ requisition_number: id })
    }

    if (!requisition) {
      throw new NotFoundException(`La requisición con el id ${id} no existe`)
    }

    requisition.estimated_amount = Number(requisition.estimated_amount)

    return requisition
  }

  async update(id: string, updateRequisitionDto: UpdateRequisitionDto) {
    const { requisition_number } = updateRequisitionDto;

    if (requisition_number) {
      const isRequisitionNumberTaken = await this.isRequisitionNumberTaken(requisition_number, id);

      if (isRequisitionNumberTaken) {
        throw new BadRequestException('El número de requisición ya está en uso.');
      }
    }

    const requisition = await this.findOne(id)

    const requisitionUpdated = this.requisitionRepository.merge(requisition, updateRequisitionDto)

    return this.requisitionRepository.save(requisitionUpdated)
  }

  remove(id: number) {
    return `This action removes a #${id} requisition`
  }

  async updateFileName(id: string, filename: string) {
    const requisition = await this.findOne(id)

    requisition.file = filename

    return this.requisitionRepository.save(requisition)
  }

  private async isRequisitionNumberTaken(requisition_number: string, excludedRequisitionId: string): Promise<boolean> {
    const count = await this.requisitionRepository
      .createQueryBuilder('requisition')
      .where('requisition.requisition_number = :requisition_number', { requisition_number })
      .andWhere('requisition.id != :excludedRequisitionId', { excludedRequisitionId })
      .getCount();

    return count > 0;
  }
}
