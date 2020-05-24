import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('produto')
export class produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'codigo', type: 'varchar', length: 100})
    codigo: string;

    @Column({name: 'nome', type: 'varchar', length: 100})
    nome: string;

    @Column({name: 'preco', type: 'decimal'})
    preco: number;

    @Column({name: 'quantidadeEstoque', type: 'int'})
    quantidadeEstoque: number;
}