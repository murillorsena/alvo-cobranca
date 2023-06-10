import Representative from "../../../domain/entity/store/Representative";
import RepresentativeRepository from "../../../application/repository/RepresentativeRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class RepresentativeRepositoryDatabase implements RepresentativeRepository {
    
    constructor (private connection: DatabaseConnection) {}

    async findAllByStoreId (storeId: string): Promise<Representative[]> {
        const representativesData = await this.connection.query(`
            SELECT "id", "name", "email", "phone", "address", "store_id"
            FROM "representative"
            WHERE "store_id" = $1;
        `, [ storeId ]);
        const representatives: Representative[] = [];
        for (const representativeData of representativesData) {
            representatives.push(new Representative(
                representativeData.name, 
                representativeData.email,
                representativeData.phone,
                representativeData.address,
                representativeData.store_id,
                representativeData.id
            ));
        }
        return representatives;
    }
    
    async findAllByStoreCode (storeCode: string): Promise<Representative[]> {
        const representativesData = await this.connection.query(`
            SELECT "id", "name", "email", "phone", "address", "store_id"
            FROM "representative"
            WHERE "store_code" = $1;
        `, [ storeCode ]);
        const representatives: Representative[] = [];
        for (const representativeData of representativesData) {
            representatives.push(new Representative(
                representativeData.name, 
                representativeData.email,
                representativeData.phone,
                representativeData.address,
                representativeData.store_id,
                representativeData.id
            ));
        }
        return representatives;
    }
}
