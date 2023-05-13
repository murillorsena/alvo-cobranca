import Representative from "../../../domain/entity/store/Representative";
import RepresentativeRepository from "../../../application/repository/RepresentativeRepository";

export default class RepresentativeRepositoryInMemory implements RepresentativeRepository {
    representatives: Representative[];

    constructor () {
        this.representatives = [];
    }

    async findAllByStoreId (storeId: string): Promise<Representative[]> {
        const representatives = this.representatives.filter(value => value.storeId === storeId);
        return representatives;
    }

    async findAllByStoreCode (storeCode: string): Promise<Representative[]> {
        // const representatives = this.representatives.filter(value => value.storeCode === storeCode);
        const representatives: Representative[] = [];
        return representatives;
    }
}
