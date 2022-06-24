import { ApiProperty } from '@nestjs/swagger'
import {
    IsDefined,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumber,
    IsString,
    ValidateNested,
  } from 'class-validator'

export class CreateNumberDto {
    @ApiProperty()
    @IsNumber()
    numero : string
}
