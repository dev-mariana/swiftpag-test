import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ChargeRepository } from './prisma/repositories/charge.repository';

@Module({
  providers: [PrismaService, ChargeRepository],
  exports: [PrismaService, ChargeRepository],
})
export class DatabaseModule {}
