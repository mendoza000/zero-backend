import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ClientsController],
  providers: [PrismaService],
})
export class ClientsModule {}
