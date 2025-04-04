import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from '../service/cars.service';
import { CreateCarDto } from '../dto/car.dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getFindAll() {
    return this.carsService.findAll();
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carsService.remove(id);
  }
}
