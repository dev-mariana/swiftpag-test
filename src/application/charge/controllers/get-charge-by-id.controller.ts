import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { GetChargeByIdResponse } from '../dto/get-charge-by-id.dto';
import { getChargeByIdParamSchema } from '../dto/get-charge-by-id.schema';
import { GetChargeByIdService } from '../services/get-charge-by-id.service';

@Controller('charges')
@ApiTags('Charges')
export class GetChargeByIdController {
  constructor(private readonly getChargeByIdService: GetChargeByIdService) {}

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'Id da cobrança (CUID)',
    example: 'cmgy9a17m00010q5sgppydsu2',
  })
  @ApiResponse({ status: 200, type: GetChargeByIdResponse })
  @ApiResponse({ status: 404, description: 'Charge not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getById(
    @Param(new ZodValidationPipe(getChargeByIdParamSchema))
    param: {
      id: string;
    },
  ): Promise<GetChargeByIdResponse> {
    return this.getChargeByIdService.execute(param.id);
  }
}
