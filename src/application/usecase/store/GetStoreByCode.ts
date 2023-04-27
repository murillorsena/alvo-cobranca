import Store from "../../../domain/entity/store/Store";
import Representative from "../../../domain/entity/store/Representative";
import StoreRepository from "../../repository/StoreRepository";
import RepresentativeRepository from "../../repository/RepresentativeRepository";

export default class GetStoreByCode {

    constructor (
        private storeRepository: StoreRepository,
        private representativeRepository: RepresentativeRepository
    ) {}

    async execute (input: Input): Promise<Output> {
        const storeData = await this.storeRepository.findByCode(input.code);
        if (!storeData) throw new Error("Store not found");
        const store = new Store(storeData.code, storeData.name, storeData.id);
        const representativesData = await this.representativeRepository.findAllByStoreCode(store.code);
        const output: Output = {
            id: store.id,
            code: store.code,
            name: store.name,
            representatives: []
        };
        for (const { id, name, email, phone, address, storeId } of representativesData) {
            const representative = new Representative(name, email, phone, address, storeId, id);
            output.representatives.push(representative);
        }
        return output;
    }
}

type Input = {
    code: string
};

type Output = {
    id: string,
    code: string,
    name: string
    representatives: {
        name: string,
        email: string,
        phone: string,
        address: string,
        storeId: string
    }[]
};
