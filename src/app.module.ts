import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { NatsModule } from './transport/nats.module';
import { HealtCheckModule } from './healt-check/healt-check.module';

@Module({
  imports: [ProductsModule, OrdersModule, NatsModule, HealtCheckModule],
})
export class AppModule {}
