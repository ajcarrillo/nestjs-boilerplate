import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Scholarship } from "../entities"
import { Repository } from "typeorm"
import { EmployeesService } from "../employees.service"
import { CreateScholarshipDto, UpdateScholarshipDto } from "./dto"

@Injectable()
export class ScholarshipService {
  constructor(
    @InjectRepository(Scholarship)
    private readonly scholarshipRepository: Repository<Scholarship>,
    private readonly employeeService: EmployeesService,
  ) {
  }

  async create(employeeId: string, createScholarshipDto: CreateScholarshipDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const scholarship = this.scholarshipRepository.create(createScholarshipDto)

    scholarship.employee = employee

    return await this.scholarshipRepository.save(scholarship)
  }

  async update(id: string, employeeId: string, updateScholarshipDto: UpdateScholarshipDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const scholarship = await this.scholarshipRepository.preload({
      id,
      ...updateScholarshipDto,
      employee,
    })

    return await this.scholarshipRepository.save(scholarship)
  }
}
