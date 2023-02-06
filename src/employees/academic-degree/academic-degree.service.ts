import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { AcademicDegree } from "../entities"
import { Repository } from "typeorm"
import { CreateAcademicDegreeDto, UpdateAcademicDegreeDto } from "../dto"
import { EmployeesService } from "../employees.service"

@Injectable()
export class AcademicDegreeService {

  constructor(
    @InjectRepository(AcademicDegree)
    private readonly academicDegreeRepository: Repository<AcademicDegree>,
    private readonly employeeService: EmployeesService,
  ) {
  }

  async create(employeeId: string, createAcademicDegreeDto: CreateAcademicDegreeDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const academicDegree = this.academicDegreeRepository.create(createAcademicDegreeDto)
    academicDegree.employee = employee
    return await this.academicDegreeRepository.save(academicDegree)
  }

  async update(id: string, employeeId: string, updateAcademicDegreeDto: UpdateAcademicDegreeDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const academicDegree = await this.academicDegreeRepository.preload({
      id,
      ...updateAcademicDegreeDto,
      employee,
    })
    return await this.academicDegreeRepository.save(academicDegree)
  }

}
