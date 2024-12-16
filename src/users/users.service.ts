import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  //Register new user
  async register(CreateUsersDto: CreateUsersDto): Promise<Users> {
    console.log("in users service")
    const { username, password, role } = CreateUsersDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      username,
      password: hashedPassword,
      role,
    });

    return await this.usersRepository.save(user);
  }

  //Find a user by username
  async findOneByUsername(username: string): Promise<Users> {
    return this.usersRepository.findOne({ where: { username } });
  }

  //Get all users
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }
}
