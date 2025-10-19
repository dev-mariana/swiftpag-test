import { Injectable } from '@nestjs/common';
import { Charge, ChargeStatus } from '../../../../domain/charge/charge.entity';
import { IChargeRepository } from '../../../../domain/charge/charge.repository';
import { ChargeMapper } from '../mappers/charge-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ChargeRepository implements IChargeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(charge: Partial<Charge>): Promise<Charge> {
    const createdCharge = await this.prisma.charge.create({
      data: {
        payer_name: charge?.payer_name ?? '',
        payer_document: charge?.payer_document ?? '',
        amount: charge?.amount ?? 0,
        description: charge?.description ?? '',
        pix_key: charge?.pix_key ?? '',
        expiration_date: charge?.expiration_date ?? new Date(),
        status: charge?.status ?? '',
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

  async updateStatus(id: string, status: ChargeStatus): Promise<Charge> {
    const updatedCharge = await this.prisma.charge.update({
      where: { id },
      data: {
        status,
      },
    });

    return ChargeMapper.toDomain(updatedCharge);
  }
}
