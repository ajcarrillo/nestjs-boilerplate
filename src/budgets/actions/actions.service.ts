import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateActionDto, UpdateActionDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Action } from "../entities"
import { Repository } from "typeorm"

@Injectable()
export class ActionsService {
  constructor(
    @InjectRepository(Action)
    private readonly actionRepository: Repository<Action>
  ) {
  }

  async create(createActionDto: CreateActionDto) {
    const action = this.actionRepository.create(createActionDto)

    return this.actionRepository.save(action)
  }

  findAll() {
    return this.actionRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} action`;
  }

  async update(id: number, updateActionDto: UpdateActionDto) {
    const { ...action } = updateActionDto

    const actionToUpdate = await this.actionRepository.preload({
      id,
      ...action,
    })

    if (!actionToUpdate) {
      throw new NotFoundException(`La acción con el id ${id} no existe`)
    }

    return this.actionRepository.save(actionToUpdate)
  }

  remove(id: number) {
    return `This action removes a #${id} action`;
  }
}
