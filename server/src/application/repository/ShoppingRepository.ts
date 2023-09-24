import Repository from "./Repository";
import Shopping from "../../domain/entity/shopping/Shopping";

export default interface ShoppingRepository extends Repository {
    findAll (): Promise<Shopping[]>;
    findById (id: string): Promise<Shopping | null>;
}
