export class GetChargeByIdResponse {
  charge_id: string;
  payer_name: string;
  payer_document: string;
  amount: number;
  description: string;
  pix_key: string;
  expiration_date: Date;
  status: string;
  created_at: Date;
}
