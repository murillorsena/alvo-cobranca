import StoreRepository from "../../../application/repository/StoreRepository";
import Connection from "../../database/Connection";

export default class StoreRepositoryDatabase implements StoreRepository {

    constructor (private connection: Connection) {}

    async findAll (): Promise<any[]> {
        const storesData = await this.connection.query('SELECT * FROM "store";', []);
        return storesData;
    }

    async findById (id: string): Promise<any | undefined> {
        const [ storeData ] = await this.connection.query('SELECT * FROM "store" WHERE "id" = $1;', id);
        return storeData;
    }

    async findByCode (code: string): Promise<any | undefined> {
        const [ storeData ] = await this.connection.query('SELECT * FROM "store" WHERE "code" = $1', code);
        return storeData;
    }
}
