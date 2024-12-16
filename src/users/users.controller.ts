import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { PublicRoute } from 'src/auth/public-route.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @PublicRoute()
  @Post('register')
  async register(@Body() CreateUsersDto: CreateUsersDto): Promise<Users> {
    console.log("in users controller", CreateUsersDto);
    return this.UsersService.register(CreateUsersDto);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin', 'editor')
  async getUsers(
    @Query('username') username: string,
  ): Promise<Users[] | Users> {
    console.log("in users get controller")
    if (username) {
      return this.UsersService.findOneByUsername(username);
    }
    return this.UsersService.findAll();
  }
}
