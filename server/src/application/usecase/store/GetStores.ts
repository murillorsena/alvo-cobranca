import { UseCase } from "../UseCase";
import { StoreRepository, RepresentativeRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";

export class GetStores implements UseCase {
    private storeRepository: StoreRepository;
    private representativeRepository: RepresentativeRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.representativeRepository = repositoryFactory.create("RepresentativeRepository") as RepresentativeRepository;
    }

    async execute (): Promise<GetStoresOutput[]> {
        const stores = await this.storeRepository.findAll();
        const output: GetStoresOutput[] = [];
        for (const store of stores) {
            const representatives = await this.representativeRepository.findAllByStoreId(store.id);
            const data: Representatives[] = [];
            for (const representative of representatives) {
                const { name, email, phone, address } = representative;
                data.push({ name, email, phone, address });
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

export type GetStoresOutput = {
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
