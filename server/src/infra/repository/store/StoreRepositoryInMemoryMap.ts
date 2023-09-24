import Store from "../../../domain/entity/store/Store";
import StoreRepository from "../../../application/repository/StoreRepository";

export default class StoreRepositoryInMemory implements StoreRepository {
    public stores: Map<string, Store>;

    constructor () {
        this.stores = new Map<string, Store>();
    }

    async findAll (): Promise<Store[]> {
        const stores = Array.from(this.stores.values());
        return stores;
    }
    
    async findById (id: string): Promise<Store | null> {
        const store = this.stores.get(id);
        if (!store) return null;
        return store;
    }

    async findByCode (code: string): Promise<Store | null> {
        const store = Array.from(this.stores.values()).find(store => store.code === code);
        if (!store) return null;
        return store;
    }
}
