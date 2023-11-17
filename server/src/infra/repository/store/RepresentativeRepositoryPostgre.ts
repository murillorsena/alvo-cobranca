import { Representative } from "../../../domain/entity";
import { RepresentativeRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database/DatabaseConnection";

export class RepresentativeRepositoryPostgre implements RepresentativeRepository {
    
    constructor (private connection: DatabaseConnection) {}

    private restore (representativeData: any): Representative {
        const props = {
            id: representativeData.id,
            name: representativeData.name,
            email: representativeData.email,
            phone: representativeData.phone,
            address: representativeData.address,
            storeId: representativeData.store_id
        };
        return Representative.restore(props);
    }

    async findAllByStoreId (storeId: string): Promise<Representative[]> {
        const statement = `
            SELECT "id", "name", "email", "phone", "address", "store_id"
            FROM "representative"
            WHERE "store_id" = $1;
        `;
        const representativesData = await this.connection.query(statement, [ storeId ]);
        const representatives: Representative[] = [];
        for (const representativeData of representativesData) {
            const representative = this.restore(representativeData);
            representatives.push(representative);
        }
        return representatives;
    }
    
    async findAllByStoreCode (storeCode: string): Promise<Representative[]> {
        const statement = `
            SELECT "id", "name", "email", "phone", "address", "store_id"
            FROM "representative"
            WHERE "store_code" = $1;
        `;
        const representativesData = await this.connection.query(statement, [ storeCode ]);
        const representatives: Representative[] = [];
        for (const representativeData of representativesData) {
            const representative = this.restore(representativeData);
            representatives.push(representative);
        }
        return representatives;
    }
}
