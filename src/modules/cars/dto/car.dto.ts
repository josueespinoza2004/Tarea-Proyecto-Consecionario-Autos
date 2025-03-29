import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @MinLength(3)
  @IsOptional()
  @ApiProperty()
  brand: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  @ApiProperty()
  model?: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  description: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  year: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  stock: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  precio: number;

  @IsOptional()
  @ApiProperty()
  isAvailable?: boolean;
}

export class UpdateCarDto extends PartialType(CreateCarDto) {}
