import { Injectable } from '@nestjs/common';
import { Charge } from '../../../../domain/charge/charge.entity';
import { IChargeRepository } from '../../../../domain/charge/charge.repository';
import { ChargeMapper } from '../mappers/charge-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ChargeRepository implements IChargeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(charge: Charge): Promise<Charge> {
    const createdCharge = await this.prisma.charge.create({
      data: {
        id: charge.id,
        payer_name: charge.payerName,
        payer_document: charge.payerDocument,
        amount: charge.amount,
        description: charge.description,
        status: charge.status,
      },
    });

    return ChargeMapper.toDomain(createdCharge);
  }

  async getById(id: string): Promise<Charge | null> {
    const charge = await this.prisma.charge.findUnique({
      where: { id },
    });

    if (!charge) {
      return null;
    }

    return ChargeMapper.toDomain(charge);
  }
}
