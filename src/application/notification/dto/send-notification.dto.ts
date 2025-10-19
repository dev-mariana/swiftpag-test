import { ApiProperty } from '@nestjs/swagger';

export class SendNotificationRequest {
  @ApiProperty({ example: 'cmgy9a17m00010q5sgppydsu2' })
  charge_id: string;
}

export class SendNotificationResponse {
  @ApiProperty({ example: 'Notification sent successfully' })
  message: string;
}
