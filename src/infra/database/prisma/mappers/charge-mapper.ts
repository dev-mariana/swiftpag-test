import { Charge, ChargeStatus } from 'src/domain/charge/charge.entity';
import { Charge as RawCharge } from '../../../../../generated/prisma';

export class ChargeMapper {
  static toPrisma(charge: Charge) {
    return {
      id: charge.id,
      payer_name: charge.payerName,
      payer_document: charge.payerDocument,
      amount: charge.amount,
      description: charge.description,
      status: charge.status,
      created_at: charge.created_at,
      updated_at: charge.updated_at,
    };
  }

  static toDomain(raw: RawCharge): Charge {
    return {
      id: raw.id,
      payerName: raw.payer_name,
      payerDocument: raw.payer_document,
      amount: raw.amount,
      description: raw.description,
      status: raw.status as ChargeStatus,
      created_at: raw.created_at,
      updated_at: raw.updated_at,
    } as Charge;
  }
}
