import StoreRepository from "../../../application/repository/StoreRepository";

export default class StoreRepositoryInMemery implements StoreRepository {
    readonly stores: any[];

    constructor () {
        this.stores = [];
    }

    async findAll (): Promise<any[]> {
        return this.stores;
    }
    
    async findById (id: string): Promise<any | undefined> {
        return this.stores.find(value => value.id === id);
    }

    async findByCode (code: string): Promise<any | undefined> {
        return this.stores.find(value => value.code === code);
    }
}
