import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCarDto } from '../dto/car.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly CarRepository: Repository<Car>,
  ) {}

  async create(CreateCarDto: CreateCarDto) {
    try {
      const car = this.CarRepository.create(CreateCarDto);
      await this.CarRepository.save(car);

      return car;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!');
    }
  }
}
