import UseCase from "../UseCase";
import ExpenseRepository from "../../repository/ExpenseRepository";
import StoreRepository from "../../repository/StoreRepository";
import RepresentativeRepository from "../../repository/RepresentativeRepository";
import ShoppingRepository from "../../repository/ShoppingRepository";
import UserRepository from "../../repository/UserRepository";

export default class GetExpenses implements UseCase {

    constructor (
        private expenseRepository: ExpenseRepository,
        private storeRepository: StoreRepository,
        private representativeRepository: RepresentativeRepository,
        private shoppingRepository: ShoppingRepository,
        private userRepository: UserRepository
    ) {}

    async execute (): Promise<Output[]> {
        const expenses = await this.expenseRepository.findAll();
        const output: Output[] = [];
        for (const expense of expenses) {
            const user = await this.userRepository.findById(expense.userId);
            const store = await this.storeRepository.findById(expense.storeId);
            const shopping = await this.shoppingRepository.findById(expense.shoppingId);
            const representatives = await this.representativeRepository.findAllByStoreId(expense.storeId);
            output.push({
                storeCode: store?.code,
                storeName: store?.name,
                shoppingName: shopping?.name,
                userName: user?.name.value,
                description: expense.description,
                amount: Number(expense.amount),
                dueDate: expense.dueDate,
                delayedDays: expense.delayedDays,
                storeRepresentatives: representatives
            });
        }
        return output;
    }
}

type Output = {
    storeCode: string | undefined,
    storeName: string | undefined,
    shoppingName: string | undefined,
    userName: string | undefined,
    description: string | undefined,
    amount: number | undefined,
    dueDate: string | undefined,
    delayedDays: number | undefined,
    storeRepresentatives: any[]
};
