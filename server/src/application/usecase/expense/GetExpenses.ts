import { UseCase } from "../../usecase";
import { UserRepository, StoreRepository, RepresentativeRepository, ShoppingRepository, ExpenseRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";

export class GetExpenses implements UseCase {
    private userRepository: UserRepository;
    private storeRepository: StoreRepository;
    private representativeRepository: RepresentativeRepository;
    private shoppingRepository: ShoppingRepository;
    private expenseRepository: ExpenseRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.representativeRepository = repositoryFactory.create("RepresentativeRepository") as RepresentativeRepository;
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
            const representatives = await this.representativeRepository.findAllByStoreId(expense.storeId);
            output.push({
                storeCode: store?.code,
                storeName: store?.name,
                shoppingName: shopping?.name,
                userName: user?.name,
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

export type GetExpensesOutput = {
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
