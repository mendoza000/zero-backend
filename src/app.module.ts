import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ProductsModule, ClientsModule],
})
export class AppModule {}
