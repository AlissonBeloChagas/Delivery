import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne,  OneToOne, JoinColumn } from "typeorm";
import { produto } from "src/produto/produto.entity";
import { pedido } from "src/pedido/pedido.entity";

@Entity('itemDoPedido')
export class itemDoPedido{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'quantidade', type: 'int'})
    quantidade: number;

    @Column({name: 'unitValor', type: 'decimal'})
    unitValor: number;

    @Column({name: 'totalValor', type: 'decimal'})
    totalValor: number;

    @ManyToOne(type => pedido, pedido => pedido.itemDoPedido)
    @JoinTable({name: 'pedidoId'})
    pedido: pedido;

    @OneToOne(type => produto)
    @JoinColumn()
    produto: produto;
}