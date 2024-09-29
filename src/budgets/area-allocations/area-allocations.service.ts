import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { AreaAllocation } from "../entities/area-allocation.entity"
import { CreateAreaAllocationDto, UpdateAreaAllocationDto } from "./dto"
import { Area } from "src/employees/entities"
import { BudgetCap } from "../entities/budget-cap.entity"

@Injectable()
export class AreaAllocationsService {
  constructor(
    @InjectRepository(AreaAllocation)
    private readonly areaAllocationRepository: Repository<AreaAllocation>,
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
    @InjectRepository(BudgetCap)
    private readonly budgetCapRepository: Repository<BudgetCap>
  ) {}

  async create(
    createAreaAllocationDto: CreateAreaAllocationDto
  ): Promise<AreaAllocation> {
    const area = await this.areaRepository.findOne({
      where: { id: createAreaAllocationDto.areaId },
    })
    if (!area) {
      throw new NotFoundException(
        `Area with uuid ${createAreaAllocationDto.areaId} not found`
      )
    }

    const budgetCap = await this.budgetCapRepository.findOne({
      where: { uuid: createAreaAllocationDto.budgetCapId },
    })
    if (!budgetCap) {
      throw new NotFoundException(
        `BudgetCap with uuid ${createAreaAllocationDto.budgetCapId} not found`
      )
    }

    const areaAllocation = this.areaAllocationRepository.create({
      ...createAreaAllocationDto,
      area,
      budgetCap,
    })

    return this.areaAllocationRepository.save(areaAllocation)
  }

  async findAll(): Promise<AreaAllocation[]> {
    return this.areaAllocationRepository.find({
      relations: ["area", "budgetCap"],
    })
  }

  async findOneByUuid(uuid: string): Promise<AreaAllocation> {
    const areaAllocation = await this.areaAllocationRepository.findOne({
      relations: ["area", "budgetCap"],
      where: { uuid },
    })
    if (!areaAllocation) {
      throw new NotFoundException(`AreaAllocation with uuid ${uuid} not found`)
    }
    return areaAllocation
  }

  async update(
    uuid: string,
    updateAreaAllocationDto: UpdateAreaAllocationDto
  ): Promise<AreaAllocation> {
    const areaAllocation = await this.findOneByUuid(uuid)

    Object.assign(areaAllocation, updateAreaAllocationDto)

    await this.areaAllocationRepository.save(areaAllocation)

    return this.areaAllocationRepository.findOne({
      where: { uuid },
      relations: ["area", "budgetCap"],
    })
  }

  async remove(uuid: string): Promise<void> {
    const areaAllocation = await this.findOneByUuid(uuid)
    await this.areaAllocationRepository.remove(areaAllocation)
  }

  async findByBudgetAndArea(budgetId: string, areaId: string) {
    const areaAllocation = await this.areaAllocationRepository.findOne({
      relations: ["area", "budgetCap"],
      where: {
        budgetCap: {
          budget: {
            id: budgetId,
          },
        },
        area: {
          id: areaId,
        },
      },
    })

    if (!areaAllocation) {
      throw new NotFoundException("Area Allocation not found.")
    }

    return areaAllocation
  }
}
