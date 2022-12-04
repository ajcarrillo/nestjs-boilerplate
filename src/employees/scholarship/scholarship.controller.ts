import { Body, Controller, Param, Patch, Post } from "@nestjs/common"
import { ScholarshipService } from "./scholarship.service"
import { CreateScholarshipDto, UpdateScholarshipDto } from "./dto"

@Controller("employees/:employeeId")
export class ScholarshipController {

  constructor(
    private readonly scholarshipService: ScholarshipService,
  ) {
  }

  @Post("scholarships")
  create(
    @Param("employeeId") employeeId: string,
    @Body() createScholarshipDto: CreateScholarshipDto,
  ) {
    return this.scholarshipService.create(employeeId, createScholarshipDto)
  }

  @Patch("scholarships/:id")
  update(
    @Param("id") id: string,
    @Param("employeeId") employeeId: string,
    @Body() updateScholarshipDto: UpdateScholarshipDto,
  ) {
    return this.scholarshipService.update(id, employeeId, updateScholarshipDto)
  }

}
