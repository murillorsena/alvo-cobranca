import { Representative } from "../../../domain/entity";
import { RepresentativeRepository } from "../../../application/repository";

export class RepresentativeRepositoryInMemory implements RepresentativeRepository {
    public representatives: Representative[];

    constructor () {
        this.representatives = [];
    }

    async findAllByStoreId (storeId: string): Promise<Representative[]> {
        const representatives = this.representatives.filter(representative => representative.storeId === storeId);
        return representatives;
    }
}
