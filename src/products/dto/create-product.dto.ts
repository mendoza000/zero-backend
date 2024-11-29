import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductVariantDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsOptional()
  color?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsOptional()
  size?: string;

  @IsBoolean()
  isAvailable: boolean;

  @IsNumber()
  quantity: number;
}

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(255)
  description: string;

  @IsBoolean()
  isPublished: boolean;
}
