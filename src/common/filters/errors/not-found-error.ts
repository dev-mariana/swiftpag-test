import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor() {
    super('Recurso não encontrado.', HttpStatus.NOT_FOUND);
  }
}
