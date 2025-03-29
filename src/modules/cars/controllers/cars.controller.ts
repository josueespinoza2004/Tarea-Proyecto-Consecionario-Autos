import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from '../service/cars.service';
import { CreateCarDto } from '../dto/car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCarsAll() {
    return 'Todos los Carros';
  }

  @Post()
  createCar(@Body() CreateCarDto) {
    return this.carsService.create(CreateCarDto);
  }
}
