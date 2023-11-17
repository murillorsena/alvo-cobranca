import { Store } from "../../../domain/entity";
import { StoreRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database/DatabaseConnection";

export class StoreRepositoryPostgre implements StoreRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (storeData: any): Store {
        const props = {
            id: storeData.id,
            code: storeData.code,
            name: storeData.name
        };
        return Store.restore(props);
    }
    
    async findAll (): Promise<Store[]> {
        const statement = `
            SELECT "id", "code", "name"
            FROM "store";
        `;
        const storesData = await this.connection.query(statement, []);
        const stores: Store[] = [];
        for (const storeData of storesData) {
            const store = this.restore(storeData);
            stores.push(store);
        }
        return stores;
    }
    
    async findById (id: string): Promise<Store | null> {
        const statement = `
            SELECT "id", "code", "name"
            FROM "store"
            WHERE "id" = $1;
        `;
        const [ storeData ] = await this.connection.query(statement, [ id ]);
        if (!storeData) return null;
        const store = this.restore(storeData);
        return store;
    }
    
    async findByCode (code: string): Promise<Store | null> {
        const statement = `
            SELECT "id", "code", "name"
            FROM "store"
            WHERE "code" = $1;
        `;
        const [ storeData ] = await this.connection.query(statement, [ code ]);
        if (!storeData) return null;
        const store = this.restore(storeData);
        return store;
    }
}
