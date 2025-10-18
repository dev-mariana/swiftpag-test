import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ChargeStatus } from 'src/domain/charge/charge.entity';
import { ChargeRepository } from 'src/infra/database/prisma/repositories/charge.repository';
import {
  CreateChargeRequest,
  CreateChargeResponse,
} from '../dto/create-charge.dto';

@Injectable()
export class CreateChargeService {
  constructor(private chargeRepository: ChargeRepository) {}

  async execute(request: CreateChargeRequest): Promise<CreateChargeResponse> {
    const pixKey = randomUUID();
    const expirationDate = new Date(Date.now() + 3600 * 1000 * 24);

    const charge = await this.chargeRepository.create({
      payer_name: request.payer_name,
      payer_document: request.payer_document,
      amount: request.amount,
      description: request.description,
      pix_key: pixKey,
      expiration_date: expirationDate,
      status: ChargeStatus.PENDING,
    });

    return {
      charge_id: charge.id,
      pix_key: charge.pix_key,
      expiration_date: charge.expiration_date,
      status: charge.status,
    };
  }
}
