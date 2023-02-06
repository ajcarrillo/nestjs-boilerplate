import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateUserDto, UpdateUserDto } from "./dto"
import { User } from "../auth/entities"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { isUUID } from "class-validator"
import * as bcrypt from "bcrypt"


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto

    const user = this.userRepository.create({
      ...userData,
      password: bcrypt.hashSync(password, 10),
    })

    await this.userRepository.save(user)
    delete user.password

    return user
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(term: string) {
    let user: User

    if (isUUID(term)) {
      user = await this.userRepository.findOneBy({ id: term })
    } else {
      const queryBuilder = this.userRepository.createQueryBuilder("user")
      user = await queryBuilder
        .where("email LIKE :term OR LOWER(first_name) LIKE :term", { term: `%${term.toLowerCase()}%` })
        .getOne()
    }

    if (!user)
      throw new NotFoundException("User not found")

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...userData } = updateUserDto

    const userToUpdate = await this.userRepository.preload({
      id,
      ...userData,
      password: bcrypt.hashSync(password, 10),
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
