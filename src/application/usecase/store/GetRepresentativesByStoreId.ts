import RepresentativeRepository from "../../repository/RepresentativeRepository";

export default class GetRepresentativesByStoreId {

    constructor (private representativeRepository: RepresentativeRepository) {}

    async execute (input: Input): Promise<Output[]> {
        const representatives = await this.representativeRepository.findAllByStoreId(input.storeId);
        return representatives;
    }
}

type Input = {
    storeId: string
};

type Output = {
    name: string,
    email: string,
    phone: string,
    address: string,
    storeId: string
};
