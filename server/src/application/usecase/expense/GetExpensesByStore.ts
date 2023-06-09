import Store from "../../../domain/entity/store/Store";
import UseCase from "../UseCase";
import ExpenseRepository from "../../repository/ExpenseRepository";
import StoreRepository from "../../repository/StoreRepository";

export default class GetExpensesByStore implements UseCase {

    constructor (
        private expenseRepository: ExpenseRepository,
        private storeRepository: StoreRepository
    ) {}

    async execute (): Promise<any> {
        const storesData = await this.expenseRepository.findStoreId();
        const stores: Store[] = [];
        for (const storeData of storesData) {
            const store = await this.storeRepository.findById(storeData.store_id);
            if (store) stores.push(store);
        }
        const output: Output[] = [];
        for (const store of stores) {
            const expenses: any[] = [];
            const amount = await this.expenseRepository.sumAmount(store.id.value);
            const delay = await this.expenseRepository.minDueDate(store.id.value);
            const expensesData = await this.expenseRepository.findAllByStoreId(store.id.value);
            for (const expenseData of expensesData) {
                expenses.push({
                    description: expenseData.description,
                    amount: expenseData.amount,
                    dueDate: expenseData.dueDate,
                    delayedDays: expenseData.delayedDays
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

type Output = {
    storeCode: string,
    storeName: string,
    amount: number,
    delay: number,
    expenses: {
        description: string,
        amount: number,
        dueDate: Date,
        delayedDays: number
    }[]
};
