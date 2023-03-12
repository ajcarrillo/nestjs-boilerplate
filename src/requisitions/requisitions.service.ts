import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateRequisitionDto, UpdateRequisitionDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Requisition } from "./entities/requisition.entity"
import { Repository } from "typeorm"
import { isUUID } from "class-validator"

@Injectable()
export class RequisitionsService {

  constructor(
    @InjectRepository(Requisition)
    private readonly requisitionRepository: Repository<Requisition>,
  ) {
  }

  async create(createRequisitionDto: CreateRequisitionDto) {
    const existsNumberRequisition = await this.requisitionRepository.findOneBy({ requisition_number: createRequisitionDto.requisition_number })

    if (existsNumberRequisition) {
      throw new BadRequestException(`El número de requisición ${createRequisitionDto.requisition_number} ya existe`)
    }

    const requisition = this.requisitionRepository.create(createRequisitionDto)

    return this.requisitionRepository.save(requisition)
  }

  findAll() {
    return `This action returns all requisitions`
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
}
