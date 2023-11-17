import { Store } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { StoreRepository, ExpenseRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class GetExpensesByStore implements UseCase {
    private storeRepository: StoreRepository;
    private expenseRepository: ExpenseRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.expenseRepository = repositoryFactory.create("ExpenseRepository") as ExpenseRepository;
    }

    async execute (): Promise<GetExpensesByStoreOutput[]> {
        const storesData = await this.expenseRepository.findStoreId();
        const stores: Store[] = [];
        for (const storeData of storesData) {
            const store = await this.storeRepository.findById(storeData.storeId);
            if (store) stores.push(store);
        }
        const output: GetExpensesByStoreOutput[] = [];
        for (const store of stores) {
            const expenses: any[] = [];
            const amount = await this.expenseRepository.sumAmount(store.id);
            const delay = await this.expenseRepository.minDueDate(store.id);
            const expensesData = await this.expenseRepository.findAllByStoreId(store.id);
            for (const expenseData of expensesData) {
                expenses.push({
                    description: expenseData.description,
                    amount: expenseData.amount,
                    dueDate: expenseData.dueDate.toLocaleDateString("pt-br"),
                    delayedDays: expenseData.getDelayedDays(new Date()),
                    status: expenseData.getStatus(new Date())
                });
            }
            output.push({
                storeCode: store.code,
                storeName: store.name,
                amount: amount,
                delay: delay,
                expenses
            });
        }
        return output;
    }
}

export type GetExpensesByStoreOutput = {
    storeCode: string,
    storeName: string,
    amount: number,
    delay: number,
    expenses: {
        description: string,
        amount: number,
        dueDate: string,
        delayedDays: number,
        status: string
    }[]
};
