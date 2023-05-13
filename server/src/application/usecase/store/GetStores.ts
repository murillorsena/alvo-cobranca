import UseCase from "../UseCase";
import Representative from "../../../domain/entity/store/Representative";
import StoreRepository from "../../repository/StoreRepository";
import RepresentativeRepository from "../../repository/RepresentativeRepository";

export default class GetStores implements UseCase {

    constructor (
        private storeRepository: StoreRepository,
        private representativeRepository: RepresentativeRepository
    ) {}

    async execute (): Promise<Output[]> {
        const stores = await this.storeRepository.findAll();
        const output: Output[] = [];
        for (const store of stores) {
            const representatives: Representative[] = await this.representativeRepository.findAllByStoreId(store.id.value);
            const data: Representatives[] = [];
            for (const representative of representatives) {
                const {name, email, phone, address} = representative;
                data.push({name, email, phone, address});
            }
            output.push({
                code: store.code,
                name: store.name,
                representatives: data
            });
        }
        return output;
    }
}

type Output = {
    code: string,
    name: string,
    representatives: Representatives[]
};

type Representatives = {
    name: string,
    email: string,
    phone: string,
    address: string
};
