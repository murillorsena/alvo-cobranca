import { Store } from "../../../domain/entity";
import { UseCase } from "..";
import { StoreRepository, DebitRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class GetDebitsByStore implements UseCase {
    private debitRepository: DebitRepository;
    private storeRepository: StoreRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.debitRepository = repositoryFactory.create("DebitRepository") as DebitRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
    }

    async execute (): Promise<GetDebitsByStoreOutput[]> {
        const storesData = await this.debitRepository.findStoreId();
        const stores: Store[] = [];
        for (const storeData of storesData) {
            const store = await this.storeRepository.findById(storeData.storeId);
            if (store) stores.push(store);
        }
        const output: GetDebitsByStoreOutput[] = [];
        for (const store of stores) {
            const debits: any[] = [];
            const amount = await this.debitRepository.sumAmount(store.id);
            const delay = await this.debitRepository.minDueDate(store.id);
            const debitsData = await this.debitRepository.findAllByStoreId(store.id);
            for (const debitData of debitsData) {
                debits.push({
                    description: debitData.description,
                    amount: debitData.amount,
                    dueDate: debitData.dueDate.toLocaleDateString("pt-br"),
                    delayedDays: debitData.getDelayedDays(),
                    status: debitData.getStatus()
                });
            }
            output.push({
                storeCode: store.code,
                storeName: store.name,
                amount: amount,
                delay: delay,
                debits
            });
        }
        return output;
    }
}

export type GetDebitsByStoreOutput = {
    storeCode: string,
    storeName: string,
    amount: number,
    delay: number,
    debits: {
        description: string,
        amount: number,
        dueDate: string,
        delayedDays: number,
        status: string
    }[]
};
