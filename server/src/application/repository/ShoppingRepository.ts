import Shopping from "../../domain/entity/shopping/Shopping";

export default interface ShoppingRepository {
    findById (id: string): Promise<Shopping | null>;
}
