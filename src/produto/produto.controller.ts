import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { produto } from './produto.entity';

@Controller('produto')
export class ProdutoController {

    constructor(private readonly service: ProdutoService) { }

    @Get() 
    async findAll() {
        return await this.service.findAll();
    } 
    
    @Get(":id")
    async findById(@Param() id: number) {
        return this.service.findById(id)
    }

    @Post()
    async create(@Body() produto) {
        return await this.service.create(produto)
    }

    @Delete(":id")
    async delete(@Param() id: number) {
        return this.delete(id);
    }
}
