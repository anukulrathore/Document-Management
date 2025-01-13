import { IsAlphanumeric, IsAscii, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsAscii()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
