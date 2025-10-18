export class Charge {
  id: string;
  payer_name: string;
  payer_document: string;
  amount: number;
  description: string;
  pix_key: string;
  expiration_date: Date;
  status: ChargeStatus;
  created_at: Date;
  updated_at: Date;
}

export enum ChargeStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  FAILED = 'Failed',
}
