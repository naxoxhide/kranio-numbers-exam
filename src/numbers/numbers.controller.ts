import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { ApiTags,ApiCreatedResponse,ApiForbiddenResponse,ApiResponse, } from '@nestjs/swagger';
import { ErrorMessage, ErrorCodes } from 'src/ErrorMessage';
import { isBlank } from 'src/str_utils';

@ApiTags('Numbers')
@Controller('kranio')
export class NumbersController {
  constructor(
    private readonly numbersService: NumbersService) {}
   
  @ApiCreatedResponse({
    description: 'El registro fue presentado correctamente.',
    type: CreateNumberDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Error inesperado',
    type: ErrorMessage,
  }) 

  @Post('/number')
  async createNumber(
    @Body() createNumberDto : CreateNumberDto,
    @Res() res){
    if(Number.isInteger(createNumberDto.numero)){
      const createNumber = await this.numbersService.createNumber(createNumberDto)
      console.log('Número ingresado : ', createNumberDto.numero)
      return res.status(HttpStatus.OK).json({
        message: 'Número ingresado correctamente',
        Number: createNumber
      })
    }else{
      throw new ErrorMessage(
        400,
        ErrorCodes.INVALID_TYPE,
        'El número ingresado debe ser entero',
      )
    }
  }
  @ApiCreatedResponse({
    description: 'El registro fue presentado correctamente.',
    type: CreateNumberDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Error inesperado',
    type: ErrorMessage,
  })

  @Get('/number/:tipo')
  async getNumbers(
    @Param('tipo') tipo: string,
    @Res() res) {
    if(tipo == 'odd' || tipo == 'even'){
      const getNumbers = await this.numbersService.getNumbers(tipo)
      console.log('Tipo de Número a buscar: ', tipo)
      return res.status(HttpStatus.OK).json({
        message: 'Retornando números...',
        Type: getNumbers
      })
    }else{
      throw new ErrorMessage(
        400,
        ErrorCodes.INVALID_TYPE,
        'Tipo de número es incorrecto',
      )
    }
    
  }
  
}
