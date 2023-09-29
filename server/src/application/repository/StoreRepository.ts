import Store from "../../domain/entity/store/Store";
import Repository from "./Repository";

export default interface StoreRepository extends Repository {
    findAll (): Promise<Store[]>;
    findById (id: string): Promise<Store | null>;
    findByCode (code: string): Promise<Store | null>;
}
