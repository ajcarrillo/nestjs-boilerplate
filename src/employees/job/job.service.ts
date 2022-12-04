import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Job } from "../entities"
import { Repository } from "typeorm"
import { EmployeesService } from "../employees.service"
import { CreateJobDto, UpdateJobDto } from "./dto"

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    private readonly employeeService: EmployeesService,
  ) {
  }

  async create(employeeId: string, createJobDto: CreateJobDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const job = this.jobRepository.create(createJobDto)

    job.employee = employee

    return await this.jobRepository.save(job)
  }

  async update(id: string, employeeId: string, updateJobDto: UpdateJobDto) {
    const employee = await this.employeeService.findOne(employeeId)
    const job = await this.jobRepository.preload({
      id,
      ...updateJobDto,
      employee,
    })

    return await this.jobRepository.save(job)
  }

  async remove(id: string, employeeId: string) {
    const job = await this.jobRepository.findOne({
      where: {
        id,
        employee: {
          id: employeeId,
        },
      },
    })

    if (!job) {
      throw new NotFoundException(`Job with ID "${id}" not found`)
    }

    job.active = false

    return await this.jobRepository.save(job)
  }
}
