import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Numbers')
@Controller('numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post('/kranio/sendNumber')
  create(@Body() createNumberDto: CreateNumberDto) {
    return this.numbersService.create(createNumberDto);
  }

  @Get()
  findAll() {
    return this.numbersService.findAll();
  }

  @Get('/kranio/getNumber/:operator')
  findOne(@Param('operator') operator: string) {
    return this.numbersService.findOne(+operator);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numbersService.remove(+id);
  }
}
