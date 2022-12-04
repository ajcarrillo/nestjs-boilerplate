import { Module } from "@nestjs/common"
import { EmployeesService } from "./employees.service"
import { EmployeesController } from "./employees.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AcademicDegree, Area, AssignamentArea, Employee, Job, Position, Scholarship } from "./entities"
import { AcademicDegreeController } from "./academic-degree/academic-degree.controller"
import { AcademicDegreeService } from "./academic-degree/academic-degree.service"
import { PositionController } from "./position/position.controller"
import { PositionService } from "./position/position.service"
import { JobController } from "./job/job.controller"
import { JobService } from "./job/job.service"
import { ScholarshipController } from "./scholarship/scholarship.controller"
import { ScholarshipService } from "./scholarship/scholarship.service"

@Module({
  controllers: [EmployeesController, AcademicDegreeController, PositionController, JobController, ScholarshipController],
  providers: [EmployeesService, AcademicDegreeService, PositionService, JobService, ScholarshipService],
  imports: [TypeOrmModule.forFeature([
    Employee,
    AcademicDegree,
    Position,
    Job,
    Area,
    AssignamentArea,
    Scholarship,
  ])],
})
export class EmployeesModule {
}
