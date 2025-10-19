import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import {
  SendNotificationRequest,
  SendNotificationResponse,
} from '../dto/send-notification.dto';
import { sendNotificationSchema } from '../dto/send-notification.schema';
import { NotificationService } from '../services/notification.service';

@Controller()
@ApiTags('notification')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationService) {}

  @Post('simulate-payment')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Payment simulation queued',
    type: SendNotificationResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async simulatePayment(
    @Body(new ZodValidationPipe(sendNotificationSchema))
    body: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    await this.notificationsService.sendPaymentNotification(body.charge_id);
    return { message: 'Payment simulation queued' };
  }
}
