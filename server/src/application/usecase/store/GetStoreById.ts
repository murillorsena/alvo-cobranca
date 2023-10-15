import { UseCase } from "../UseCase";
import { StoreRepository, RepresentativeRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";
import { StoreNotFoundError } from "../../error";

export class GetStoreById implements UseCase {
    private storeRepository: StoreRepository;
    private representativeRepository: RepresentativeRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.representativeRepository = repositoryFactory.create("RepresentativeRepository") as RepresentativeRepository;
    }

    async execute (input: GetStoreByIdInput): Promise<GetStoreByIdOutput> {
        const store = await this.storeRepository.findById(input.storeId);
        if (!store) throw new StoreNotFoundError();
        const representatives = await this.representativeRepository.findAllByStoreId(input.storeId);
        const data: Representatives[] = [];
        for (const representative of representatives) {
            const { name, email, phone, address } = representative;
            data.push({ name, email, phone, address });
        }
        const output: GetStoreByIdOutput = {
            code: store.code,
            name: store.name,
            representatives: data
        };
        return output;
    }
}

export type GetStoreByIdInput = {
    storeId: string
};

export type GetStoreByIdOutput = {
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