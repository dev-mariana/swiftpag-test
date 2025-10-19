import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import {
  CreateChargeRequest,
  CreateChargeResponse,
} from '../dto/create-charge.dto';
import { createChargeSchema } from '../dto/create-charge.schema';
import { CreateChargeService } from '../services/create-charge.service';

@Controller('charges')
@ApiTags('Charges')
export class CreateChargeController {
  constructor(private readonly createChargeService: CreateChargeService) {}

  @Post()
  @ApiResponse({ status: 201, type: CreateChargeResponse })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async create(
    @Body(new ZodValidationPipe(createChargeSchema))
    body: CreateChargeRequest,
  ): Promise<CreateChargeResponse> {
    return this.createChargeService.execute(body);
  }
}
