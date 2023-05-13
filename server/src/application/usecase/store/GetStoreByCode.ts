import UseCase from "../UseCase";
import StoreRepository from "../../repository/StoreRepository";
import RepresentativeRepository from "../../repository/RepresentativeRepository";
import BadRequestError from "../../error/BadRequestError";

export default class GetStoreByCode implements UseCase {

    constructor (
        private storeRepository: StoreRepository,
        private representativeRepository: RepresentativeRepository
    ) {}

    async execute (input: Input): Promise<Output> {
        const store = await this.storeRepository.findByCode(input.code);
        if (!store) throw new BadRequestError("Store not found");
        const representatives = await this.representativeRepository.findAllByStoreCode(input.code);
        const data : Representatives[] = [];
        for (const representative of representatives) {
            const {name, email, phone, address} = representative;
            data.push({name, email, phone, address});
        }
        const output: Output = {
            code: store.code,
            name: store.name,
            representatives: data
        };
        return output;
    }
}

type Input = {
    code: string
};

type Output = {
    code: string,
    name: string
    representatives: Representatives[]
};

type Representatives = {
    name: string,
    email: string,
    phone: string,
    address: string
};
