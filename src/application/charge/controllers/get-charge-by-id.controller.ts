import { Controller, Get, Param } from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { GetChargeByIdResponse } from '../dto/get-charge-by-id.dto';
import { getChargeByIdParamSchema } from '../dto/get-charge-by-id.schema';
import { GetChargeByIdService } from '../services/get-charge-by-id.service';

@Controller('charges')
export class GetChargeByIdController {
  constructor(private readonly getChargeByIdService: GetChargeByIdService) {}

  @Get(':id')
  async getById(
    @Param(new ZodValidationPipe(getChargeByIdParamSchema))
    param: {
      id: string;
    },
  ): Promise<GetChargeByIdResponse | null> {
    return this.getChargeByIdService.execute(param.id);
  }
}
