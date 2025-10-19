import { ApiProperty } from '@nestjs/swagger';

export class GetChargeByIdResponse {
  @ApiProperty({ example: 'charge_abc123' })
  charge_id: string;

  @ApiProperty({ example: 'John Doe' })
  payer_name: string;

  @ApiProperty({ example: '123.456.789-00' })
  payer_document: string;

  @ApiProperty({ example: 100.0 })
  amount: number;

  @ApiProperty({ example: 'Payment for invoice #123', required: false })
  description: string;

  @ApiProperty({ example: 'pix_key_abc123' })
  pix_key: string;

  @ApiProperty({ example: '2023-01-01T00:00:00Z' })
  expiration_date: Date;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty({ example: '2023-01-01T00:00:00Z' })
  created_at: Date;
}
