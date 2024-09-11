import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { CreateBudgetCapDto } from "./dto/create-budget-cap.dto"
import { UpdateBudgetCapDto } from "./dto/update-budget-cap.dto"
import { BudgetCap } from "../entities/budget-cap.entity"
import { Budget } from "../entities"
import { BudgetCapDto } from "./dto"

@Injectable()
export class BudgetCapsService {
  constructor(
    @InjectRepository(BudgetCap)
    private readonly budgetCapRepository: Repository<BudgetCap>,
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>
  ) {}

  async create(
    createBudgetCapDto: CreateBudgetCapDto
  ): Promise<Omit<BudgetCap, "id">> {
    const { year, totalAmount } = createBudgetCapDto
    const budget = await this.budgetRepository.findOne({ where: { year } })

    if (!budget) {
      throw new NotFoundException(`Budget for year ${year} not found`)
    }

    const budgetCap = this.budgetCapRepository.create({
      totalAmount,
      budget,
    })

    const savedBudgetCap = await this.budgetCapRepository.save(budgetCap)

    const { id, ...rest } = savedBudgetCap

    return rest
  }

  async findAll(): Promise<BudgetCapDto[]> {
    const budgetCaps = await this.budgetCapRepository.find({
      relations: ["budget", "areaAllocations"],
    })

    return budgetCaps.map(({ id, ...rest }) => rest)
  }

  async findOne(uuid: string): Promise<Omit<BudgetCap, "id">> {
    const budgetCap = await this.budgetCapRepository.findOne({
      where: { uuid },
      relations: ["budget", "areaAllocations"],
    })

    if (!budgetCap) {
      throw new NotFoundException(`BudgetCap with UUID ${uuid} not found`)
    }

    const { id, ...rest } = budgetCap

    return rest
  }

  async update(
    uuid: string,
    updateBudgetCapDto: UpdateBudgetCapDto
  ): Promise<Omit<BudgetCap, "id">> {
    console.log({ uuid })
    const budgetCap = await this.budgetCapRepository.findOne({
      where: { uuid },
    })

    console.log({ budgetCap })

    const budgetCapToUpdate = await this.budgetCapRepository.preload({
      id: budgetCap.id,
      ...updateBudgetCapDto,
    })

    console.log({ budgetCapToUpdate })

    if (!budgetCapToUpdate) {
      throw new NotFoundException(`BudgetCap with UUID ${uuid} not found`)
    }

    const updatedBudgetCap =
      await this.budgetCapRepository.save(budgetCapToUpdate)

    const { id, ...rest } = updatedBudgetCap

    return rest
  }

  async remove(id: number): Promise<void> {
    const result = await this.budgetCapRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`BudgetCap with id ${id} not found`)
    }
  }
}
