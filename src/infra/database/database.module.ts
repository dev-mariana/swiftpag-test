import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  NotificationLog,
  NotificationLogSchema,
} from './mongo/schemas/notification-log.schema';
import { PrismaService } from './prisma/prisma.service';
import { ChargeRepository } from './prisma/repositories/charge.repository';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');

        if (!uri) {
          throw new Error('MONGO_URI environment variable is not defined');
        }
        return { uri };
      },
    }),
    MongooseModule.forFeature([
      {
        name: NotificationLog.name,
        schema: NotificationLogSchema,
      },
    ]),
  ],
  providers: [PrismaService, ChargeRepository],
  exports: [PrismaService, ChargeRepository, MongooseModule],
})
export class DatabaseModule {}
