import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { AreaAllocationMovement } from "../entities"
import { Repository } from "typeorm"
import { AreaAllocationsService } from "../area-allocations/area-allocations.service"
import { CreateAreaAllocationMovementDto } from "./dto/create-area-allocation-movement.dto"
import { User } from "src/auth/entities"

@Injectable()
export class AreaAllocationMovementsService {
  constructor(
    @InjectRepository(AreaAllocationMovement)
    private readonly areaAllocationMovementRepository: Repository<AreaAllocationMovement>,
    private readonly areaAllocationService: AreaAllocationsService
  ) {}

  async create(
    areaAllocationUuid: string,
    createDto: CreateAreaAllocationMovementDto,
    user: User
  ): Promise<AreaAllocationMovement> {
    const areaAllocation =
      await this.areaAllocationService.findOneByUuid(areaAllocationUuid)

    if (!areaAllocation) {
      throw new NotFoundException("Area Allocation not found")
    }

    const movement = this.areaAllocationMovementRepository.create({
      amount: createDto.amount,
      description: createDto.description,
      areaAllocation,
      user,
    })

    return await this.areaAllocationMovementRepository.save(movement)
  }

  async findAllByAreaAllocationUuid(areaAllocationUuid: string) {
    return await this.areaAllocationMovementRepository.find({
      where: { areaAllocation: { uuid: areaAllocationUuid } },
      relations: ["areaAllocation", "user"],
    })
  }

  toDto(areaAllocationMovement: AreaAllocationMovement) {
    return {
      uuid: areaAllocationMovement.uuid,
      amount: areaAllocationMovement.amount,
      createdAt: areaAllocationMovement.createdAt,
      description: areaAllocationMovement.description,
      areaAllocation: areaAllocationMovement.areaAllocation,
      user: `${areaAllocationMovement.user.firstName} ${areaAllocationMovement.user.lastName}`,
    }
  }

  async delete(uuid: string) {
    await this.areaAllocationMovementRepository.delete({ uuid })
  }
}
