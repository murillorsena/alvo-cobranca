import Store from "../../../domain/entity/store/Store";
import StoreRepository from "../../../application/repository/StoreRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class StoreRepositoryDatabase implements StoreRepository {

    constructor (private connection: DatabaseConnection) {}
    
    async findAll (): Promise<Store[]> {
        const storesData = await this.connection.query('SELECT * FROM "store";', []);
        const stores: Store[] = [];
        for (const storeData of storesData) {
            stores.push(new Store(storeData.code, storeData.name, storeData.id));
        }
        return stores;
    }
    
    async findById (id: string): Promise<Store | null> {
        const [ storeData ] = await this.connection.query('SELECT * FROM "store" WHERE "id" = $1;', [ id ]);
        if (!storeData) return null;
        const store = new Store(storeData.code, storeData.name, storeData.id);
        return store;
    }
    
    async findByCode (code: string): Promise<Store | null> {
        const [ storeData ] = await this.connection.query('SELECT * FROM "store" WHERE "code" = $1', [ code ]);
        if (!storeData) return null;
        const store = new Store(storeData.code, storeData.name, storeData.id);
        return store;
    }
}
