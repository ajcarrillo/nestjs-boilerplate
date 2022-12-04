import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateUserDto, UpdateUserDto } from "./dto"
import { User } from "../auth/entities"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { isUUID } from "class-validator"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
