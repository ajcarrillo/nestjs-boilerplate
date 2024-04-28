import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SubBudgetAdjustment } from "../entities/sub-budget-adjustment.entity";
import { Repository } from "typeorm";
import { CreateSubBudgetAdjustmentDto } from "../dto";
import { User } from "../../auth/entities";
import { SubBudgetsService } from "../sub-budgets.service";
import { SubBudget } from "../entities/sub-budget.entity";

@Injectable()
export class SubBudgetAdjustmentService {
  constructor(
    @InjectRepository(SubBudgetAdjustment)
    private readonly subBudgetAdjustmentRepository: Repository<SubBudgetAdjustment>,
    @InjectRepository(SubBudget)
    private readonly subBudgetRepository: Repository<SubBudget>,
    private readonly subBudgetService: SubBudgetsService
  ) {
  }

  async findAll(budgetYear: string) {
    return this.subBudgetAdjustmentRepository.find({
      relations: ["sourceSubBudget", "targetSubBudget"],
      where: {
        budget_year: budgetYear
      }
    });
  }

  async create(createSubBudgetAdjustmentDto: CreateSubBudgetAdjustmentDto, user: User, budgetYear: string) {
    const { source_sub_budget_id, target_sub_budget_id, amount } = createSubBudgetAdjustmentDto;

    const { sourceSubBudget, targetSubBudget } = await this.findResources(source_sub_budget_id, target_sub_budget_id);

    if (sourceSubBudget.amount - +amount < 0) {
      throw new BadRequestException("El monto de ajuste es mayor que el disponible en el sub presupuesto de origen");
    }

    const sourceAmount = Number(sourceSubBudget.amount);
    const targetAmount = Number(targetSubBudget.amount);

    sourceSubBudget.amount = Number((sourceAmount - amount).toFixed(2));
    targetSubBudget.amount = Number((targetAmount + amount).toFixed(2));

    const subBudgetAdjustment = await this.subBudgetAdjustmentRepository.create({
      ...createSubBudgetAdjustmentDto,
      sourceSubBudget,
      targetSubBudget,
      createdBy: user.id,
      budget_year: budgetYear
    });

    await this.subBudgetAdjustmentRepository.save(subBudgetAdjustment);
    await this.subBudgetRepository.save(sourceSubBudget);
    await this.subBudgetRepository.save(targetSubBudget);

    return subBudgetAdjustment;
  }

  private async findResources(sourceSubBudgetId: string, targetSubBudgetId: string) {
    const [sourceSubBudget, targetSubBudget] = await Promise.all([
      this.subBudgetService.findOne(sourceSubBudgetId),
      this.subBudgetService.findOne(targetSubBudgetId)
    ]);

    return { sourceSubBudget, targetSubBudget };
  }
}
