import { Charge, ChargeStatus } from 'src/domain/charge/charge.entity';
import { Charge as RawCharge } from '../../../../../generated/prisma';

export class ChargeMapper {
  static toPrisma(charge: Charge) {
    return {
      id: charge.id,
      payer_name: charge.payer_name,
      payer_document: charge.payer_document,
      amount: charge.amount,
      description: charge.description,
      pix_key: charge.pix_key,
      expiration_date: charge.expiration_date,
      status: charge.status,
      created_at: charge.created_at,
      updated_at: charge.updated_at,
    };
  }

  static toDomain(raw: RawCharge): Charge {
    return {
      id: raw.id,
      payer_name: raw.payer_name,
      payer_document: raw.payer_document,
      amount: raw.amount,
      description: raw.description,
      pix_key: raw.pix_key,
      expiration_date: raw.expiration_date,
      status: raw.status as ChargeStatus,
      created_at: raw.created_at,
      updated_at: raw.updated_at,
    } as unknown as Charge;
  }
}
