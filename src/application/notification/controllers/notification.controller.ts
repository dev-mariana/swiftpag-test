import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from '../services/notification.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationService) {}

  @Post('simulate-payment')
  async simulatePayment(@Body('charge_id') chargeId: string) {
    await this.notificationsService.sendPaymentNotification(chargeId);
    return { message: 'Payment simulation queued' };
  }
}
