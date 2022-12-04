import { Module } from "@nestjs/common"
import { EmployeesService } from "./employees.service"
import { EmployeesController } from "./employees.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AcademicDegree, Area, AssignamentArea, Employee, Job, Position, Scholarship } from "./entities"
import { AcademicDegreeController } from "./academic-degree/academic-degree.controller"
import { AcademicDegreeService } from "./academic-degree/academic-degree.service"

@Module({
  controllers: [EmployeesController, AcademicDegreeController],
  providers: [EmployeesService, AcademicDegreeService],
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
