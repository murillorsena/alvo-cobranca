import Store from "../../../domain/entity/store/Store";
import StoreRepository from "../../../application/repository/StoreRepository";

export default class StoreRepositoryInMemery implements StoreRepository {
    public stores: Store[];

    constructor () {
        this.stores = [];
    }

    async findAll (): Promise<Store[]> {
        const stores = this.stores;
        return stores;
    }
    
    async findById (id: string): Promise<Store | null> {
        const store = this.stores.find(store => store.id.value === id);
        if (!store) return null;
        return store;
    }

    async findByCode (code: string): Promise<Store | null> {
        const store = this.stores.find(store => store.code === code);
        if (!store) return null;
        return store;
    }
}
