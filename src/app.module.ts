import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cliente } from './cliente/cliente.entity';
import { produto } from './produto/produto.entity';
import { pedido } from './pedido/pedido.entity';
import { itemDoPedido } from './item-do-pedido/item-do-pedido.entity';
import { ClienteController } from './cliente/cliente.controller';
import { ProdutoController } from './produto/produto.controller';
import { PedidoController } from './pedido/pedido.controller';
import { ClienteService } from './cliente/cliente.service';
import { ProdutoService } from './produto/produto.service';
import { PedidoService } from './pedido/pedido.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'delivery',
      entities: [
        cliente, pedido, produto, itemDoPedido
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([ cliente, pedido, produto, itemDoPedido ])
  ],
  controllers: [AppController, ClienteController, ProdutoController, PedidoController],
  providers: [AppService, ClienteService, ProdutoService, PedidoService],
})
export class AppModule { }
