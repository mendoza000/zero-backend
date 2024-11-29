import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getClients() {
    return this.prisma.client.findMany();
  }

  @Get(':id')
  async getClient(id: string) {
    return this.prisma.client.findUnique({
      where: { id },
    });
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createClient(@Body() client: CreateClientDto) {
    return this.prisma.client.create({
      data: client,
    });
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateClient(@Body() client: CreateClientDto, @Param('id') id: string) {
    return this.prisma.client.update({
      where: { id },
      data: client,
    });
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async deleteClient(@Param('id') id: string) {
    return this.prisma.client.delete({
      where: { id },
    });
  }
}
