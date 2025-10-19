import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from 'src/common/filters/errors/not-found-error';
import { ChargeStatus } from 'src/domain/charge/charge.entity';
import { NotificationLog } from 'src/infra/database/mongo/schemas/notification-log.schema';
import { ChargeRepository } from 'src/infra/database/prisma/repositories/charge.repository';
import { RabbitMQService } from 'src/infra/messaging/rabbitmq/rabbitmq.service';

@Injectable()
export class NotificationWorkerService implements OnModuleInit {
  constructor(
    private readonly rabbitMQService: RabbitMQService,
    private chargeRepository: ChargeRepository,
    @InjectModel(NotificationLog.name)
    private notificationLogModel: Model<NotificationLog>,
  ) {}

  async onModuleInit() {
    await this.rabbitMQService.consume('pix_payments', async (msg) => {
      const content = JSON.parse(msg.content.toString());
      const chargeId = content.chargeId;

      const charge = await this.chargeRepository.getById(chargeId);

      if (!charge) {
        throw new NotFoundException();
      }

      const previousStatus = charge.status;

      if (previousStatus === ChargeStatus.PAID) return;

      await this.chargeRepository.updateStatus(chargeId, ChargeStatus.PAID);

      const notificationLog = await this.notificationLogModel.create({
        charge_id: chargeId,
        previous_status: previousStatus,
        new_status: ChargeStatus.PAID,
      });

      console.info('Notification logged:', notificationLog);
    });
  }
}
