import { IsAlphanumeric, IsAscii, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
