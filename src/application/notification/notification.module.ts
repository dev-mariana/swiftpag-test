import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { MessagingModule } from 'src/infra/messaging/messaging.module';
import { NotificationsController } from './controllers/notification.controller';
import { NotificationWorkerService } from './services/notification-worker.service';
import { NotificationService } from './services/notification.service';

@Module({
  imports: [DatabaseModule, MessagingModule],
  controllers: [NotificationsController],
  providers: [NotificationService, NotificationWorkerService],
  exports: [NotificationService, NotificationWorkerService],
})
export class NotificationsModule {}
