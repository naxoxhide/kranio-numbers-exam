import { ApiProperty } from '@nestjs/swagger'

export enum ErrorCodes {
  GRAL_ERROR = 'GRAL_ERROR',
  INVALID_TYPE = 'INVALID_TYPE'
}

const errorCodesKeys = Object.keys(ErrorCodes)

export class ErrorMessage {
  constructor(
    status_code: number,
    code: ErrorCodes,
    mainError: string,
    messages?: string[],
  ) {
    this.statusCode = status_code
    this.code = code
    this.error = mainError
    if (messages?.length > 0) {
      this.message = messages
    } else {
      this.message = [mainError]
    }
  }

  @ApiProperty()
  statusCode: number

  @ApiProperty({
    type: String,
    default: '<string>',
    enum: errorCodesKeys,
  })
  code: ErrorCodes

  @ApiProperty()
  message: any

  @ApiProperty()
  error: string

  toJson(): Object {
    return {
      statusCode: this.statusCode,
      code: this.code,
      message: this.message,
      error: this.error,
    }
  }
}
