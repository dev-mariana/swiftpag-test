import { Module } from '@nestjs/common';
import { RedisService } from 'src/infra/cache/redis/redis.service';
import { DatabaseModule } from 'src/infra/database/database.module';
import { MessagingModule } from 'src/infra/messaging/messaging.module';
import { CreateChargeController } from './controllers/create-charge.controller';
import { GetChargeByIdController } from './controllers/get-charge-by-id.controller';
import { CreateChargeService } from './services/create-charge.service';
import { GetChargeByIdService } from './services/get-charge-by-id.service';

@Module({
  imports: [DatabaseModule, MessagingModule],
  controllers: [CreateChargeController, GetChargeByIdController],
  providers: [CreateChargeService, GetChargeByIdService, RedisService],
  exports: [],
})
export class ChargeModule {}
