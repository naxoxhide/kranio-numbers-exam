import { Module } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { NumbersController } from './numbers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { numberSchema } from './schemas/numbers.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'oddNumber', schema: numberSchema, collection:'odd_numbers'},
  {name: 'evenNumber', schema: numberSchema, collection:'even_numbers'}])],
  controllers: [NumbersController],
  providers: [NumbersService]
})
export class NumbersModule {}
