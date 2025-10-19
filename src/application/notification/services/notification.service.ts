import { Injectable } from '@nestjs/common';
import { RabbitMQService } from 'src/infra/messaging/rabbitmq/rabbitmq.service';

@Injectable()
export class NotificationService {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  async sendPaymentNotification(chargeId: string) {
    await this.rabbitMQService.sendToQueue('pix_payments', { chargeId });
  }
}
