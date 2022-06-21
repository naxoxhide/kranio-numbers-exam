import { ApiProperty } from '@nestjs/swagger'

export class CreateNumberDto {
    @ApiProperty()
    numero : number
}
