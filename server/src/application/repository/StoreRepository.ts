import Store from "../../domain/entity/store/Store";

export default interface StoreRepository {
    findAll (): Promise<Store[]>;
    findById (storeId: string): Promise<Store | null>;
    findByCode (storeCode: string): Promise<Store | null>;
}
