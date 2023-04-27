import Store from "../../../domain/entity/store/Store";
import StoreRepository from "../../repository/StoreRepository";

export default class GetStores {

    constructor (private storeRepository: StoreRepository) {}

    async execute (): Promise<Output[]> {
        const stores = await this.storeRepository.findAll();
        const output: Output[] = [];
        for (const { code, name, id } of stores) {
            const store = new Store(code, name, id);
            output.push({
                id: store.id,
                code: store.code,
                name: store.name
            });
        }
        return output;
    }
}

type Output = {
    id: string,
    code: string,
    name: string
};
