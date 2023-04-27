import RepresentativeRepository from "../../../application/repository/RepresentativeRepository";

export default class RepresentativeRepositoryInMemory implements RepresentativeRepository {
    representatives: any[];

    constructor () {
        this.representatives = [];
    }

    async findAllByStoreId (storeId: string): Promise<any[]> {
        return this.representatives.filter(value => value.storeId === storeId);
    }

    async findAllByStoreCode (storeCode: string): Promise<any[]> {
        return this.representatives.filter(value => value.storeCode === storeCode);
    }
}
