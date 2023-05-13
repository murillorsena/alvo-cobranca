import Representative from "../../../domain/entity/store/Representative";
import RepresentativeRepository from "../../../application/repository/RepresentativeRepository";
import Connection from "../../database/Connection";

export default class RepresentativeRepositoryDatabase implements RepresentativeRepository {
    
    constructor (private connection: Connection) {}

    async findAllByStoreId (storeId: string): Promise<Representative[]> {
        const representativesData = await this.connection.query('SELECT * FROM "representative" WHERE "store_id" = $1;', [ storeId ]);
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
        const representativesData = await this.connection.query('SELECT * FROM "representative" WHERE "store_code" = $1;', [ storeCode ]);
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
