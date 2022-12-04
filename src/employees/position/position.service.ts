import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Position } from "../entities"
import { Repository } from "typeorm"
import { EmployeesService } from "../employees.service"
import { CreatePositionDto, UpdatePositionDto } from "./dto"

@Injectable()
export class PositionService {

  constructor(
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
    private readonly employeeService: EmployeesService,
  ) {
  }

  async create(employeeId: string, createPositionDto: CreatePositionDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const position = this.positionRepository.create(createPositionDto)

    position.employee = employee

    return await this.positionRepository.save(position)
  }

  async update(id: string, employeeId: string, updatePositionDto: UpdatePositionDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const position = await this.positionRepository.preload({
      id,
      ...updatePositionDto,
      employee,
    })

    return await this.positionRepository.save(position)
  }

  async remove(id: string, employeeId: string) {
    const position = await this.positionRepository.findOne({
      where: {
        id,
        employee: {
          id: employeeId,
        },
      },
    })

    if (!position) {
      throw new NotFoundException(`Position with ID "${id}" not found`)
    }

    return await this.positionRepository.remove(position)
  }

}
