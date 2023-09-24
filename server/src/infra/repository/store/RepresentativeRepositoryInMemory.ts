import Representative from "../../../domain/entity/store/Representative";
import RepresentativeRepository from "../../../application/repository/RepresentativeRepository";

export default class RepresentativeRepositoryInMemory implements RepresentativeRepository {
    public representatives: Representative[];

    constructor () {
        this.representatives = [];
    }

    async findAllByStoreId (storeId: string): Promise<Representative[]> {
        const representatives = this.representatives.filter(representative => representative.storeId.value === storeId);
        return representatives;
    }
}
