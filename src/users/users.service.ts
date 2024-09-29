import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateUserDto, UpdateUserDto } from "./dto"
import { User } from "../auth/entities"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { isUUID } from "class-validator"
import * as bcrypt from "bcrypt"
import { AreasService } from "src/employees/areas/areas.service"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly areaService: AreasService
  ) {}

  async create(createUserDto: CreateUserDto) {
    let entityArea = null
    const { password, area, ...userData } = createUserDto

    if (area) {
      entityArea = await this.areaService.findOne(area)
    }

    const user = this.userRepository.create({
      ...userData,
      area: entityArea,
      password: bcrypt.hashSync(password, 10),
    })

    await this.userRepository.save(user)
    delete user.password

    return user
  }

  async findAll() {
    const users = await this.userRepository.find({
      relations: ["area"],
    })

    return users.map((user) => ({
      ...user,
      area: user.area
        ? {
            value: user.area.id,
            label: user.area.alias,
            full_description: user.area.description,
          }
        : null,
    }))
  }

  async findOne(term: string) {
    let user: User

    if (isUUID(term)) {
      user = await this.userRepository.findOneBy({ id: term })
    } else {
      const queryBuilder = this.userRepository.createQueryBuilder("user")
      user = await queryBuilder
        .where("email LIKE :term OR LOWER(first_name) LIKE :term", {
          term: `%${term.toLowerCase()}%`,
        })
        .getOne()
    }

    if (!user) throw new NotFoundException("User not found")

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let entityArea = null
    const { password, area, ...userData } = updateUserDto

    if (area) {
      entityArea = await this.areaService.findOne(area)
    }

    const userToUpdate = await this.userRepository.preload({
      id,
      area: entityArea,
      ...userData,
    })

    if (!userToUpdate) {
      throw new NotFoundException(`User with id ${id} not found`)
    }

    return this.userRepository.save(userToUpdate)
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
