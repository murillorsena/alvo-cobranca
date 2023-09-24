import ShoppingRepository from "../../../application/repository/ShoppingRepository";
import Shopping from "../../../domain/entity/shopping/Shopping";

export default class ShoppingRepositoryInMemory implements ShoppingRepository {
    public shoppings: Shopping[];

    constructor () {
        this.shoppings = [];
    }

    async findById (id: string): Promise<Shopping | null> {
        const shopping = this.shoppings.find(shopping => shopping.id.value === id);
        if (!shopping) return null;
        return shopping;
    }
}
