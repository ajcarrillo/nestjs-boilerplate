import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RequisitionSubBudget } from "../entities/requisition-sub-budget.entity";
import { Repository } from "typeorm";
import { CreateRequisitionSubBudgetDto } from "./dto/create-requisition-sub-budget.dto";
import { User } from "../../auth/entities";
import { SubBudgetsService } from "../sub-budgets.service";
import { AreasService } from "../../employees/areas/areas.service";
import { S3Service } from "../../files/s3.service";
import { Express } from "express";
import { UpdateRequisitionEventDto } from "./dto/update-requisition-event.dto";

@Injectable()
export class RequisitionSubBudgetService {
  constructor(
    @InjectRepository(RequisitionSubBudget)
    private readonly requisitionSubBudgetRepository: Repository<RequisitionSubBudget>,
    private readonly subBudgetService: SubBudgetsService,
    private readonly areaService: AreasService,
    private readonly s3Service: S3Service
  ) {
  }

  async create(id: string, createRequisitionSubBudgetDto: CreateRequisitionSubBudgetDto, user: User, file: Express.Multer.File) {

    createRequisitionSubBudgetDto.estimated_amount = parseFloat(createRequisitionSubBudgetDto.estimated_amount.toString());

    const {
      requisition_number,
      preparation_date,
      processing_date,
      estimated_amount
    } = createRequisitionSubBudgetDto;

    const requisitionSubBudget = this.requisitionSubBudgetRepository.create({
      requisition_number,
      preparation_date,
      processing_date,
      estimated_amount,
      subBudget: await this.subBudgetService.findOne(id),
      area: await this.areaService.findOne(createRequisitionSubBudgetDto.area_id),
      createdBy: user.id
    });

    try {
      if (file !== undefined) {
        const { Key: fileKey } = await this.s3Service.uploadFile(file);
        requisitionSubBudget.file = fileKey;
      }
    } catch (e) {
      throw new BadRequestException(`Error uploading file: ${e.message}`);
    }

    return this.requisitionSubBudgetRepository.save(requisitionSubBudget);
  }

  async findOne(id: string) {
    return await this.requisitionSubBudgetRepository.findOneBy({ id });
  }

  async getDictionary() {
    const items = await this.requisitionSubBudgetRepository.find({
      relations: ["subBudget"]
    });

    return items.map(item => ({
      id: item.id,
      requisition_number: item.requisition_number,
      area_description: item.area.alias,
      event: item.subBudget.event
    }));
  }

  async findAll() {
    return this.requisitionSubBudgetRepository.find({
      relations: ["subBudget"]
    });
  }

  async update(id: string, createRequisitionSubBudgetDto: CreateRequisitionSubBudgetDto, user: User, file: Express.Multer.File) {
    const { ...requisition } = createRequisitionSubBudgetDto;

    const requisitionToUpdate = await this.requisitionSubBudgetRepository.preload({
      id,
      updatedBy: user.id,
      ...requisition,
      estimated_amount: +createRequisitionSubBudgetDto.estimated_amount
    });

    if (!requisitionToUpdate) {
      throw new BadRequestException(`La requisición con el id ${id} no existe`);
    }

    try {
      if (file !== undefined) {
        const { Key: fileKey } = await this.s3Service.uploadFile(file);
        requisitionToUpdate.file = fileKey;
      }
    } catch (e) {
      throw new BadRequestException(`Error uploading file: ${e.message}`);
    }

    return this.requisitionSubBudgetRepository.save(requisitionToUpdate);
  }

  async updateEvent(id: string, updateRequisitionEventDto: UpdateRequisitionEventDto, user: User) {
    const requisitionToUpdate = await this.requisitionSubBudgetRepository.preload({
      id,
      updatedBy: user.id,
      subBudget: await this.subBudgetService.findOne(updateRequisitionEventDto.sub_budget_id)
    });

    if (!requisitionToUpdate) {
      throw new BadRequestException(`La requisición con el id ${id} no existe`);
    }

    return this.requisitionSubBudgetRepository.save(requisitionToUpdate);
  }
}
