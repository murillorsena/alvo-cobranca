import { Shopping } from "../../../domain/entity";
import { ShoppingRepository } from "../../../application/repository";

export class ShoppingRepositoryInMemory implements ShoppingRepository {
    public shoppings: Shopping[];

    constructor () {
        this.shoppings = [];
    }

    async findAll (): Promise<Shopping[]> {
        const shoppings = this.shoppings;
        return shoppings;
    }

    async findById (id: string): Promise<Shopping | null> {
        const shopping = this.shoppings.find(shopping => shopping.id === id);
        if (!shopping) return null;
        return shopping;
    }
}
