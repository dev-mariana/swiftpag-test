import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChargeModule } from './application/charge/charge.module';
import { NotificationsModule } from './application/notification/notification.module';
import { CacheModule } from './infra/cache/cache.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    ChargeModule,
    CacheModule,
    NotificationsModule,
  ],
})
export class AppModule {}
