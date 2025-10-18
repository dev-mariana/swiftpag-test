import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateChargeController } from './controllers/create-charge.controller';
import { GetChargeByIdController } from './controllers/get-charge-by-id.controller';
import { CreateChargeService } from './services/create-charge.service';
import { GetChargeByIdService } from './services/get-charge-by-id.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateChargeController, GetChargeByIdController],
  providers: [CreateChargeService, GetChargeByIdService],
  exports: [],
})
export class ChargeModule {}
