import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumbersModule } from './numbers/numbers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NumbersModule, MongooseModule.forRoot('mongodb://localhost:27019/kraniodb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
