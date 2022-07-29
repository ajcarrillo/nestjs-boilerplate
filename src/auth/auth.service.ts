import { Injectable } from "@nestjs/common";
import { LoginUserDto } from "./dto";

@Injectable()
export class AuthService {
  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

  }
}
