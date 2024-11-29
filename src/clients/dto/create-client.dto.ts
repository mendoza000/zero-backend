import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsPhoneNumber('VE')
  phoneNumber: string;

  @IsString()
  address: string;

  @IsString()
  @MinLength(2)
  @MaxLength(12)
  dni: string;

  @IsString()
  @MinLength(2)
  password: string;
}
