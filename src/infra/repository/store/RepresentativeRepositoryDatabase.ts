import RepresentativeRepository from "../../../application/repository/RepresentativeRepository";
import Connection from "../../database/Connection";

export default class RepresentativeRepositoryDatabase implements RepresentativeRepository {
    
    constructor (private connection: Connection) {}
    
    async findAllByStoreId (storeId: string): Promise<any[]> {
        const representatives = await this.connection.query('SELECT * FROM "representative" WHERE "store_id" = $1;', storeId);
        return representatives;
    }

    async findAllByStoreCode (storeCode: string): Promise<any[]> {
        const representatives = await this.connection.query('SELECT * FROM "representative" WHERE "store_code" = $1;', storeCode);
        return representatives;
    }
}
