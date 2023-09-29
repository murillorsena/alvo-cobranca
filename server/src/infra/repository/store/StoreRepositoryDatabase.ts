import Store from "../../../domain/entity/store/Store";
import StoreRepository from "../../../application/repository/StoreRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class StoreRepositoryDatabase implements StoreRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (storeData: any): Store {
        const props = {
            id: storeData["id"],
            code: storeData["code"],
            name: storeData["name"]
        };
        return Store.restore(props);
    }
    
    async findAll (): Promise<Store[]> {
        const query = `
            SELECT "id", "code", "name"
            FROM "store";
        `;
        const storesData = await this.connection.query(query, []);
        const stores: Store[] = [];
        for (const storeData of storesData) {
            const store = this.restore(storeData);
            stores.push(store);
        }
        return stores;
    }
    
    async findById (id: string): Promise<Store | null> {
        const query = `
            SELECT "id", "code", "name"
            FROM "store"
            WHERE "id" = ?;
        `;
        const [ storeData ] = await this.connection.query(query, [ id ]);
        if (!storeData) return null;
        const store = this.restore(storeData);
        return store;
    }
    
    async findByCode (code: string): Promise<Store | null> {
        const query = `
            SELECT "id", "code", "name"
            FROM "store"
            WHERE "code" = ?;
        `;
        const [ storeData ] = await this.connection.query(query, [ code ]);
        if (!storeData) return null;
        const store = this.restore(storeData);
        return store;
    }
}
