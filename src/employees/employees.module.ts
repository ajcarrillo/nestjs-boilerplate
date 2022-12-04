import { Module } from "@nestjs/common"
import { EmployeesService } from "./employees.service"
import { EmployeesController } from "./employees.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AcademicDegree, Area, AssignamentArea, Employee, Job, Position, Scholarship } from "./entities"
import { AcademicDegreeController } from "./academic-degree/academic-degree.controller"
import { AcademicDegreeService } from "./academic-degree/academic-degree.service"
import { PositionController } from "./position/position.controller"
import { PositionService } from "./position/position.service"

@Module({
  controllers: [EmployeesController, AcademicDegreeController, PositionController],
  providers: [EmployeesService, AcademicDegreeService, PositionService],
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
