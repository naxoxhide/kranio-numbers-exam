import { Injectable } from '@nestjs/common';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Number } from './interfaces/numbers.interface';

@Injectable()
export class NumbersService {
constructor(
  @InjectModel('oddNumero') private readonly numeroOddModel: Model<Number>,
  @InjectModel('evenNumero') private readonly numeroEvenModel: Model<Number>
){}
  
  async createNumber(createNumberDto: CreateNumberDto):Promise<Number> {
    let numero = Number(createNumberDto.numero)
    let numbers = []
    numbers.push(numero)
    if(numero % 2 == 0) {
      const number = new this.numeroEvenModel(createNumberDto)
      return await number.save()
    }else{
      const number = new this.numeroOddModel(createNumberDto)
      return await number.save()
    }
  
  }

  async getNumbers(type: string):Promise<Number[]>{
    if(type === 'odd'){
      const number = await this.numeroOddModel.find().sort({$natural:-1}).limit(10)
      return number
    }else if(type === 'even'){
      const number = await this.numeroEvenModel.find().sort({$natural:-1}).limit(10)
      return number
    }
  }

  // findAll() {
  //   return `This action returns all numbers`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} number`;
  // }

  // update(id: number, updateNumberDto: UpdateNumberDto) {
  //   return `This action updates a #${id} number`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} number`;
  // }

}
