import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateLineDto, UpdateLineDto } from "./dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Line } from "../entities"
import { Repository } from "typeorm"

@Injectable()
export class LinesService {
  constructor(
    @InjectRepository(Line)
    private readonly lineRepository: Repository<Line>,
  ) {
  }

  async create(createLineDto: CreateLineDto) {
    const line = this.lineRepository.create(createLineDto)

    return await this.lineRepository.save(line)
  }

  async findAll() {
    return await this.lineRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} line`
  }

  async update(id: number, updateLineDto: UpdateLineDto) {
    const { ...line } = updateLineDto

    const lineToUpdate = await this.lineRepository.preload({
      id,
      ...line,
    })

    if (!lineToUpdate) {
      throw new NotFoundException(`La línea con el id ${id} no existe`)
    }

    return await this.lineRepository.save(lineToUpdate)
  }

  remove(id: number) {
    return `This action removes a #${id} line`
  }

  async getDictionary() {
    const lines = await this.lineRepository.find()

    return lines.map(line => ({
      value: line.id,
      label: line.name,
    }))
  }
}
