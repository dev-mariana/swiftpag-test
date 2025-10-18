export class Charge {
  id: string;
  payerName: string;
  payerDocument: string;
  amount: number;
  description: string;
  status: ChargeStatus;
  created_at: Date;
  updated_at: Date;
}

export enum ChargeStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  FAILED = 'Failed',
}
