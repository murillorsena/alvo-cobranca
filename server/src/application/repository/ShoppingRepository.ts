import Shopping from "../../domain/entity/shopping/Shopping";
import Repository from "./Repository";

export default interface ShoppingRepository extends Repository {
    findAll (): Promise<Shopping[]>;
    findById (id: string): Promise<Shopping | null>;
}
