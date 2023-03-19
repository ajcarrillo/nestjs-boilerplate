import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateAreaDto } from "./dto/create-area.dto"
import { UpdateAreaDto } from "./dto/update-area.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Area } from "../entities"
import { Repository } from "typeorm"

@Injectable()
export class AreasService {

  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
  ) {
  }

  async create(createAreaDto: CreateAreaDto) {
    const area = this.areaRepository.create(createAreaDto)

    return await this.areaRepository.save(area)
  }

  async findAll() {
    return await this.areaRepository.find()
  }

  async findOne(id: string) {
    return await this.areaRepository.findOneBy({id})
  }

  async update(id: string, updateAreaDto: UpdateAreaDto) {
    const { ...area } = updateAreaDto

    const areaToUpdate = await this.areaRepository.preload({
      id,
      ...area,
    })

    if (!areaToUpdate) {
      throw new NotFoundException(`El área con el id ${id} no existe`)
    }

    return await this.areaRepository.save(areaToUpdate)
  }

  async remove(id: string) {
    return `This action removes a #${id} area`
  }

  async getDictionary(withFullName = false) {
    const areas = await this.areaRepository.find({
      order: {
        alias: "ASC",
      }
    })

    return areas.map(area => ({
      value: area.id,
      label: area.alias,
      ...(withFullName && { full_description: area.description })
    }))
  }
}
