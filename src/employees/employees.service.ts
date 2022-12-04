import { BadRequestException, Injectable } from "@nestjs/common"
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Employee } from "./entities"
import { Repository } from "typeorm"
import { isUUID } from "class-validator"

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {
  }

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeRepository.save(createEmployeeDto)
  }

  async findAll() {
    return await this.employeeRepository.find()
  }

  async findOne(term: string) {
    if (!isUUID(term)) {
      throw new BadRequestException(`The term ${term} is not a valid UUID`)
    }

    return await this.employeeRepository.findOne({
      where: {
        id: term,
      },
      relations: ["academicDegrees", "positions", "jobs"],
    })
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const { ...employee } = updateEmployeeDto

    const employeeToUpdate = await this.employeeRepository.preload({
      id,
      ...employee,
    })

    if (!employeeToUpdate) {
      throw new BadRequestException(`The employee with id ${id} does not exist`)
    }

    return this.employeeRepository.save(employeeToUpdate)
  }

  remove(id: number) {
    return `This action removes a #${id} employee`
  }
}
