import { Body, Controller, Param, Patch, Post } from "@nestjs/common"
import { AcademicDegreeService } from "./academic-degree.service"
import { CreateAcademicDegreeDto, UpdateAcademicDegreeDto } from "../dto"

@Controller("employees/:employeeId")
export class AcademicDegreeController {

  constructor(
    private readonly academicDegreeService: AcademicDegreeService,
  ) {
  }


  @Post("academic-degrees")
  create(
    @Param("employeeId") employeeId: string,
    @Body() createAcademicDegreeDto: CreateAcademicDegreeDto,
  ) {
    return this.academicDegreeService.create(employeeId, createAcademicDegreeDto)
  }

  @Patch("academic-degrees/:id")
  update(
    @Param("id") id: string,
    @Param("employeeId") employeeId: string,
    @Body() updateAcademicDegreeDto: UpdateAcademicDegreeDto,
  ) {
    return this.academicDegreeService.update(id, employeeId, updateAcademicDegreeDto)
  }
}
