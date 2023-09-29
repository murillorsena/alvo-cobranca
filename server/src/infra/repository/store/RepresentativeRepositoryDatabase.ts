import Representative from "../../../domain/entity/store/Representative";
import RepresentativeRepository from "../../../application/repository/RepresentativeRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class RepresentativeRepositoryDatabase implements RepresentativeRepository {
    
    constructor (private connection: DatabaseConnection) {}

    private restore (representativeData: any): Representative {
        const props = {
            id: representativeData["id"],
            name: representativeData["name"],
            email: representativeData["email"],
            prone: representativeData["phone"],
            address: representativeData["address"],
            storeId: representativeData["store_id"]
        };
        return Representative.restore(props);
    }

    async findAllByStoreId (storeId: string): Promise<Representative[]> {
        const query = `
            SELECT "id", "name", "email", "phone", "address", "store_id"
            FROM "representative"
            WHERE "store_id" = ?;
        `;
        const representativesData = await this.connection.query(query, [ storeId ]);
        const representatives: Representative[] = [];
        for (const representativeData of representativesData) {
            const representative = this.restore(representativeData);
            representatives.push(representative);
        }
        return representatives;
    }
    
    async findAllByStoreCode (storeCode: string): Promise<Representative[]> {
        const query = `
            SELECT "id", "name", "email", "phone", "address", "store_id"
            FROM "representative"
            WHERE "store_code" = ?;
        `;
        const representativesData = await this.connection.query(query, [ storeCode ]);
        const representatives: Representative[] = [];
        for (const representativeData of representativesData) {
            const representative = this.restore(representativeData);
            representatives.push(representative);
        }
        return representatives;
    }
}
