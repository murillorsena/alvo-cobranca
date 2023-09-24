import Store from "./domain/entity/store/Store";
import UseCase from "./application/usecase/UseCase";
import StoreRepository from "./application/repository/StoreRepository";

export default class SendNotification implements UseCase {

    constructor (
        private storeRepository: StoreRepository
    ) {}

    async execute(input: Input[]): Promise<any> {
        for (const { storeId } of input) {
            const storeData = await this.storeRepository.findById(storeId);
            if (storeData) {
                const store = new Store(storeData.id, storeData.code, storeData.name);
            }
        }
    }
}

type Input = {
    storeId: string
};
