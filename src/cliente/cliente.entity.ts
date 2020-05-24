import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { pedido } from "src/pedido/pedido.entity";

@Entity('cliente')
export class cliente{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome', type: 'varchar', length: 100})
    name: string;

    @Column({name: 'cpf', type: 'varchar', length: 14})
    cpf: string;

    @Column({name: 'endereço', type: 'varchar', length: 100})
    endereço: string;

    @OneToMany(type => pedido, pedido => pedido.cliente, {cascade: true, eager: true})
    pedido: Array<pedido>;
}