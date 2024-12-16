import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '../users.entity';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be atleast 6 characters long' })
  password: string;

  @IsEnum(Role)
  role: Role;
}
