import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common"
import { JobService } from "./job.service"
import { CreateJobDto, UpdateJobDto } from "./dto"

@Controller("employees/:employeeId")
export class JobController {

  constructor(
    private readonly jobService: JobService,
  ) {
  }

  @Post("jobs")
  create(
    @Param("employeeId") employeeId: string,
    @Body() createJobDto: CreateJobDto,
  ) {
    return this.jobService.create(employeeId, createJobDto)
  }

  @Patch("jobs/:id")
  update(
    @Param("id") id: string,
    @Param("employeeId") employeeId: string,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    return this.jobService.update(id, employeeId, updateJobDto)
  }

  @Delete("jobs/:id")
  remove(
    @Param("id") id: string,
    @Param("employeeId") employeeId: string,
  ) {
    return this.jobService.remove(id, employeeId)
  }
}
