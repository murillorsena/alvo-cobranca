import { UseCase } from "../../usecase";
import { UserRepository, StoreRepository, ShoppingRepository, DebitRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class GetDebits implements UseCase {
    private userRepository: UserRepository;
    private storeRepository: StoreRepository;
    private shoppingRepository: ShoppingRepository;
    private debitRepository: DebitRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.shoppingRepository = repositoryFactory.create("ShoppingRepository") as ShoppingRepository;
        this.debitRepository = repositoryFactory.create("DebitRepository") as DebitRepository;
    }

    async execute (): Promise<GetDebitsOutput[]> {
        const expenses = await this.debitRepository.findAll();
        const output: GetDebitsOutput[] = [];
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
                delayedDays: expense.getDelayedDays(),
                status: expense.getStatus()
            });
        }
        return output;
    }
}

export type GetDebitsOutput = {
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
