import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Numbers')
@Controller('numbers')
export class NumbersController {
  constructor(
    private readonly numbersService: NumbersService) {}

  @Post('/kranio/number')
  async createNumber(
    @Body() createNumberDto : CreateNumberDto,
    @Res() res){
    const createNumber = await this.numbersService.createNumber(createNumberDto)
      console.log('Número ingresado : ', createNumberDto.numero)
      return res.status(HttpStatus.OK).json({
        message: 'Número ingresado correctamente',
        Number: createNumber
      })
  }

  // @Get()
  // findAll() {
  //   return this.numbersService.findAll();
  // }

  @Get('/kranio/number/:tipo')
  async getNumbers(
    @Param('tipo') tipo: string,
    @Res() res) {
    const getNumbers = await this.numbersService.getNumbers(tipo)
    console.log('Tipo de Número a buscar: ', tipo)
    return res.status(HttpStatus.OK).json({
      message: 'Numeros retornados correctamente',
      Type: getNumbers
    })
  }

  // @Delete('/kranio/number/:id')
  // remove(@Param('id') id: string) {
  //   return this.numbersService.remove(+id);
  // }
}
