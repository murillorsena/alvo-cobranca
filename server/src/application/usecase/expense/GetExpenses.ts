import { UseCase } from "../../usecase";
import { UserRepository, StoreRepository, ShoppingRepository, ExpenseRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class GetExpenses implements UseCase {
    private userRepository: UserRepository;
    private storeRepository: StoreRepository;
    private shoppingRepository: ShoppingRepository;
    private expenseRepository: ExpenseRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.shoppingRepository = repositoryFactory.create("ShoppingRepository") as ShoppingRepository;
        this.expenseRepository = repositoryFactory.create("ExpenseRepository") as ExpenseRepository;
    }

    async execute (): Promise<GetExpensesOutput[]> {
        const expenses = await this.expenseRepository.findAll();
        const output: GetExpensesOutput[] = [];
        for (const expense of expenses) {
            const user = await this.userRepository.findById(expense.userId);
            const store = await this.storeRepository.findById(expense.storeId);
            const shopping = await this.shoppingRepository.findById(expense.shoppingId);
            output.push({
                storeCode: store?.code,
                storeName: store?.name,
                shoppingName: shopping?.name,
                userName: user?.name,
                description: expense.description,
                amount: Number(expense.amount),
                dueDate: expense.dueDate.toLocaleDateString("pt-br"),
                delayedDays: expense.getDelayedDays(new Date()),
                status: expense.getStatus(new Date())
            });
        }
        return output;
    }
}

export type GetExpensesOutput = {
    storeCode: string | undefined,
    storeName: string | undefined,
    shoppingName: string | undefined,
    userName: string | undefined,
    description: string,
    amount: number,
    dueDate: string,
    delayedDays: number,
    status: string
};
