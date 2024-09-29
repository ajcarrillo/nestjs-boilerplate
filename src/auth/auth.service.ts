import { Injectable, Logger, UnauthorizedException } from "@nestjs/common"
import { LoginUserDto } from "./dto"
import * as bcrypt from "bcrypt"
import { JwtPayload } from "./interfaces/jwt-payload.interface"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./entities"
import { Repository } from "typeorm"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
  private readonly logger = new Logger("AuthService")

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    protected readonly jwtService: JwtService
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto

    const user = await this.userRepository.findOne({
      where: { email },
      select: {
        email: true,
        password: true,
        id: true,
        lastName: true,
        firstName: true,
        roles: true,
        motherName: true,
        isActive: true,
      },
      relations: ["area"],
    })

    if (!user) throw new UnauthorizedException("Credentials are invalid")
    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException("Credentials are invalid")

    delete user.password

    return {
      ...user,
      token: this.getJwtToken({ id: user.id }),
    }
  }

  private getJwtToken(payload: JwtPayload): string {
    const token = this.jwtService.sign(payload)
    return token
  }
}
