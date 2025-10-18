export class CreateChargeRequest {
  payer_name: string;
  payer_document: string;
  amount: number;
  description: string;
}

export class CreateChargeResponse {
  charge_id: string;
  pix_key: string;
  expiration_date: Date;
  status: string;
}
