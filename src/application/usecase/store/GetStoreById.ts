import Store from "../../../domain/entity/store/Store";
import Representative from "../../../domain/entity/store/Representative";
import StoreRepository from "../../repository/StoreRepository";
import RepresentativeRepository from "../../repository/RepresentativeRepository";

export default class GetStoreById {

    constructor (
        private storeRepository: StoreRepository,
        private representativeRepository: RepresentativeRepository
    ) {}

    async execute (input: Input): Promise<Output> {
        const storeData = await this.storeRepository.findById(input.id);
        if (!storeData) throw new Error("Store not found");
        const store = new Store(storeData.code, storeData.name, storeData.id);
        const representativesData = await this.representativeRepository.findAllByStoreId(store.id);
        const representatives: Representative[] = [];
        for (const { id, name, email, phone, address, storeId } of representativesData) {
            const representative = new Representative(name, email, phone, address, storeId, id);
            representatives.push(representative);
        }
        return {
            id: store.id,
            code: store.code,
            name: store.name,
            representatives
        };
    }
}

type Input = {
    id: string
};

type Output = {
    id: string,
    code: string,
    name: string
    representatives: Representative[]
};
