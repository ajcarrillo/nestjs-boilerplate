// import {
//   BadRequestException,
//   ConflictException,
//   Injectable,
//   NotFoundException,
// } from "@nestjs/common"
// import { AreaBudgetCapAllocationView, MonthlyAreaAllocation } from "../entities"
// import { InjectRepository } from "@nestjs/typeorm"
// import { QueryFailedError, Repository } from "typeorm"
// import { CreateMonthlyAreaAllocationDto } from "./dto"
// import { AreasService } from "src/employees/areas/areas.service"
// import { Area } from "src/employees/entities"

// @Injectable()
// export class MonthlyAreaAllocationService {
//   constructor(
//     @InjectRepository(MonthlyAreaAllocation)
//     private readonly monthlyBudgetAllocationRepository: Repository<MonthlyAreaAllocation>,
//     @InjectRepository(AreaBudgetCapAllocationView)
//     private readonly areaBudgetAllocationViewRepository: Repository<AreaBudgetCapAllocationView>,
//     private readonly areaService: AreasService
//   ) {}

//   async create(dto: CreateMonthlyAreaAllocationDto, budgetYear: number) {
//     if (dto.year !== budgetYear) {
//       throw new BadRequestException(
//         "The year in the data does not match the budgetYear in the query string."
//       )
//     }

//     const area = await this.areaService.findOne(dto.areaId)
//     if (!area) {
//       throw new NotFoundException("Area not found.")
//     }

//     await this.validateAllocation(
//       area,
//       dto.year,
//       parseFloat(dto.allocatedAmount)
//     )

//     const allocation = this.monthlyBudgetAllocationRepository.create({
//       ...dto,
//     })

//     try {
//       return await this.monthlyBudgetAllocationRepository.save(allocation)
//     } catch (error) {
//       if (
//         error instanceof QueryFailedError &&
//         error.message.includes("unique constraint")
//       ) {
//         throw new ConflictException(
//           "Un registro de asignación mensual ya existe para el área, mes y año especificados."
//         )
//       }
//       throw error
//     }
//   }

//   private async validateAllocation(
//     area: Area,
//     year: number,
//     newAllocatedAmount: number
//   ) {
//     const areaAllocation =
//       await this.areaBudgetAllocationViewRepository.findOne({
//         where: {
//           area_id: area.id,
//           budget_year: year,
//         },
//       })

//     if (!areaAllocation) {
//       throw new NotFoundException(
//         "Area allocation not found for the specified budget year."
//       )
//     }

//     const totalAllocatedAmount = parseFloat(
//       areaAllocation.total_allocation_amount.toString()
//     )

//     const existingAllocations =
//       await this.monthlyBudgetAllocationRepository.find({
//         where: {
//           areaId: area.id,
//           year,
//         },
//       })

//     const sumAllocatedAmount = existingAllocations.reduce(
//       (sum, alloc) => sum + parseFloat(alloc.allocatedAmount),
//       0
//     )

//     const totalAfterNewAllocation = sumAllocatedAmount + newAllocatedAmount

//     if (totalAfterNewAllocation > totalAllocatedAmount) {
//       throw new BadRequestException(
//         "La suma de los montos asignados supera el monto total de asignación del área."
//       )
//     }
//   }

//   toDoto(entity: MonthlyAreaAllocation) {
//     return {
//       uuid: entity.uuid,
//       month: entity.month,
//       year: entity.year,
//       allocatedAmount: +entity.allocatedAmount,
//     }
//   }
// }

import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { AreaBudgetCapAllocationView, MonthlyAreaAllocation } from "../entities"
import { InjectRepository } from "@nestjs/typeorm"
import { QueryFailedError, Repository } from "typeorm"
import {
  CreateMonthlyAreaAllocationDto,
  UpdateMonthlyAreaAllocationDto,
} from "./dto"
import { AreasService } from "src/employees/areas/areas.service"
import { Area } from "src/employees/entities"

@Injectable()
export class MonthlyAreaAllocationService {
  constructor(
    @InjectRepository(MonthlyAreaAllocation)
    private readonly monthlyAreaAllocationRepository: Repository<MonthlyAreaAllocation>,

    @InjectRepository(AreaBudgetCapAllocationView)
    private readonly areaBudgetAllocationViewRepository: Repository<AreaBudgetCapAllocationView>,

    private readonly areaService: AreasService
  ) {}

  async create(
    dto: CreateMonthlyAreaAllocationDto,
    budgetYear: number
  ): Promise<MonthlyAreaAllocation> {
    const { area, newAllocatedAmount } =
      await this.prepareAndValidateAllocation(dto, budgetYear)

    const allocation = this.monthlyAreaAllocationRepository.create({
      ...dto,
    })

    try {
      return await this.monthlyAreaAllocationRepository.save(allocation)
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes("unique constraint")
      ) {
        throw new ConflictException(
          "Un registro de asignación mensual ya existe para el área, mes y año especificados."
        )
      }
      throw error
    }
  }

  async update(
    uuid: string,
    dto: UpdateMonthlyAreaAllocationDto
  ): Promise<MonthlyAreaAllocation> {
    const allocation = await this.monthlyAreaAllocationRepository.findOne({
      where: { uuid },
    })

    if (!allocation) {
      throw new NotFoundException("Monthly Area Allocation not found.")
    }

    const updatedData = { ...allocation, ...dto }

    const { area, newAllocatedAmount } =
      await this.prepareAndValidateAllocation(
        updatedData,
        allocation.year,
        allocation.uuid
      )

    allocation.allocatedAmount = updatedData.allocatedAmount

    try {
      return await this.monthlyAreaAllocationRepository.save(allocation)
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes("unique constraint")
      ) {
        throw new ConflictException(
          "Un registro de asignación mensual ya existe para el área, mes y año especificados."
        )
      }
      throw error
    }
  }

  async findAll(areaId: string, budgetYear: number) {
    return this.monthlyAreaAllocationRepository.find({
      where: {
        areaId,
        year: budgetYear,
      },
    })
  }

  private async prepareAndValidateAllocation(
    dto: CreateMonthlyAreaAllocationDto | UpdateMonthlyAreaAllocationDto,
    budgetYear: number,
    existingAllocationUuid?: string
  ): Promise<{ area: Area; newAllocatedAmount: number }> {
    if (dto.year !== budgetYear) {
      throw new BadRequestException(
        "El año en los datos no coincide con el budgetYear en el query string."
      )
    }

    const area = await this.areaService.findOne(dto.areaId)
    if (!area) {
      throw new NotFoundException("Area not found.")
    }

    const newAllocatedAmount = parseFloat(dto.allocatedAmount)

    await this.validateAllocation(
      area,
      dto.year,
      newAllocatedAmount,
      existingAllocationUuid
    )

    return { area, newAllocatedAmount }
  }

  private async validateAllocation(
    area: Area,
    year: number,
    newAllocatedAmount: number,
    allocationUuidToExclude?: string
  ): Promise<void> {
    const areaAllocation =
      await this.areaBudgetAllocationViewRepository.findOne({
        where: {
          area_id: area.id,
          budget_year: year,
        },
      })

    if (!areaAllocation) {
      throw new NotFoundException(
        "Area allocation not found for the specified budget year."
      )
    }

    const totalAllocatedAmount = parseFloat(
      areaAllocation.total_allocation_amount.toString()
    )

    const existingAllocations = await this.monthlyAreaAllocationRepository.find(
      {
        where: {
          areaId: area.id,
          year,
        },
      }
    )

    const sumAllocatedAmount = existingAllocations
      .filter((alloc) => alloc.uuid !== allocationUuidToExclude)
      .reduce((sum, alloc) => sum + parseFloat(alloc.allocatedAmount), 0)

    const totalAfterNewAllocation = sumAllocatedAmount + newAllocatedAmount

    if (totalAfterNewAllocation > totalAllocatedAmount) {
      throw new BadRequestException(
        "La suma de los montos asignados supera el monto total de asignación del área."
      )
    }
  }

  toDto(entity: MonthlyAreaAllocation) {
    return {
      uuid: entity.uuid,
      month: entity.month,
      year: entity.year,
      areaId: entity.areaId,
      allocatedAmount: +entity.allocatedAmount,
    }
  }
}
