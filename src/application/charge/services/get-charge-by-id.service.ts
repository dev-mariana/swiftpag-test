import { Injectable } from '@nestjs/common';
import { NotFoundException } from 'src/common/filters/errors/not-found-error';
import { RedisService } from 'src/infra/cache/redis/redis.service';
import { ChargeRepository } from 'src/infra/database/prisma/repositories/charge.repository';
import { GetChargeByIdResponse } from '../dto/get-charge-by-id.dto';

@Injectable()
export class GetChargeByIdService {
  constructor(
    private chargeRepository: ChargeRepository,
    private redisService: RedisService,
  ) {}

  async execute(id: string): Promise<GetChargeByIdResponse> {
    const cached = await this.redisService.get(`charge:${id}`);

    if (cached) {
      return JSON.parse(cached);
    }

    const charge = await this.chargeRepository.getById(id);

    if (!charge) {
      throw new NotFoundException();
    }

    await this.redisService.set(
      `charge:${charge.id}`,
      JSON.stringify(charge),
      3600,
    );

    return {
      charge_id: charge.id,
      payer_name: charge.payer_name,
      payer_document: charge.payer_document,
      amount: charge.amount,
      description: charge.description,
      pix_key: charge.pix_key,
      expiration_date: charge.expiration_date,
      status: charge.status,
      created_at: charge.created_at,
    };
  }
}
