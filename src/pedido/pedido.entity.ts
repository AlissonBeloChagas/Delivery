import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { cliente } from "src/cliente/cliente.entity";
import { itemDoPedido } from "src/item-do-pedido/item-do-pedido.entity";

@Entity('pedido')
export class pedido{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'numeroPedido', type: 'varchar', length: 100})
    numeroPedido: string;

    @Column({name: 'dataPedido', type: 'date'})
    dataPedido: Date;

    @Column({name: 'total', type: 'decimal'})
    total: number;

    @OneToMany(type => itemDoPedido, itemDoPedido => itemDoPedido.pedido, {cascade: true, eager: true})
    itemDoPedido: Array<itemDoPedido>;

    @ManyToOne(type => cliente, cliente => cliente.pedido)
    @JoinTable({name: 'clienteId'})
    cliente: cliente;
}