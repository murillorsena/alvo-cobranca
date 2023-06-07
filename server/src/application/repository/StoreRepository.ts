import Store from "../../domain/entity/store/Store";

export default interface StoreRepository {
    findAll (): Promise<Store[]>;
    findById (id: string): Promise<Store | null>;
    findByCode (code: string): Promise<Store | null>;
}
