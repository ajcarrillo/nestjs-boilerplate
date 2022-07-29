import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto";
import { Auth, GetUser } from "./decorators";
import { User } from "./entities";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post("me")
  @Auth()
  async me(
    @GetUser() user: User
  ) {
    return { user };
  }
}
