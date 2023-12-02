import { UseCase } from "../../usecase";
import { UserRepository, StoreRepository, RepresentativeRepository, ShoppingRepository, DebitRepository, CollectionActionRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class GetDebitsByStore implements UseCase {
    private userRepository: UserRepository;
    private shoppingRepository: ShoppingRepository;
    private storeRepository: StoreRepository;
    private representativeRepository: RepresentativeRepository;
    private debitRepository: DebitRepository;
    private collectionActionRepository: CollectionActionRepository;


    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
        this.shoppingRepository = repositoryFactory.create("ShoppingRepository") as ShoppingRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.representativeRepository = repositoryFactory.create("RepresentativeRepository") as RepresentativeRepository;
        this.debitRepository = repositoryFactory.create("DebitRepository") as DebitRepository;
        this.collectionActionRepository = repositoryFactory.create("CollectionActionRepository") as CollectionActionRepository;
    }

    async execute (): Promise<GetDebitsByStoreOutput[]> {
        const stores = await this.storeRepository.findAll();
        const output: any[] = [];
        for (const store of stores) {
            const shopping = await this.getShopping(store.id);
            const user = await this.getUser(store.id);
            const debits = await this.getDebits(store.id);
            const representatives = await this.getRepresentatives(store.id);
            const actions = await this.getActions(store.id);
            output.push({ store, shopping, user, debits, actions, representatives });
        }
        return output;
    }

    private async getShopping (storeId: string): Promise<ShoppingData> {
        const shopping = await this.shoppingRepository.findByStoreId(storeId);
        const output = {
            id: shopping?.id,
            code: shopping?.code,
            name: shopping?.name,
            description: shopping?.description
        }
        return output;
    }

    private async getUser (storeId: string): Promise<UserData> {
        const user = await this.userRepository.findByStoreId(storeId);
        const output = {
            id: user?.id,
            name: user?.name,
            email: user?.email
        }
        return output;
    }

    private async getDebits (storeId: string): Promise<DebitsData[]> {
        const debits = await this.debitRepository.findAllByStoreId(storeId);
        const output: any[] = [];
        for (const debit of debits) {
            output.push({
                id: debit.id,
                description: debit.description,
                amount: debit.amount,
                dueDate: debit.dueDate,
                delayedDays: debit.getDelayedDays(),
                status: debit.getStatus()
            });
        }
        return output;
    }

    private async getActions (storeId: string): Promise<ActionsData[]> {
        const actions = await this.collectionActionRepository.findAllByStoreId(storeId);
        const output: any[] = [];
        for (const action of actions) {
            const user = await this.userRepository.findById(action.userId);
            output.push({
                id: action.id,
                type: action.type,
                title: action.title,
                content: action.content,
                username: user?.name,
                createdAt: action.createdAt,
                updatedAt: action.updatedAt
            });
        }
        return output;
    }

    private async getRepresentatives (storeId: string): Promise<RepresentativesData[]> {
        const representatives = await this.representativeRepository.findAllByStoreId(storeId);
        const output: any[] = [];
        for (const representative of representatives) {
            output.push({
                id: representative.id,
                name: representative.name,
                email: representative.email,
                phone: representative.phone,
                address: representative.address,
                role: representative.role
            });
        }
        return output;
    }
}

type ShoppingData = {
    id?: string,
    code?: string,
    name?: string,
    description?: string
};

type UserData = {
    id?: string,
    name?: string,
    email?: string
};

type DebitsData = {
    id: string,
    description: string,
    amount: number,
    dueDate: Date,
    delayedDays: number,
    status: string
};

type ActionsData = {
    id: string,
    type: string,
    title: string,
    content: string,
    username: string,
    createdAt: Date,
    updatedAt: Date | null
};

type RepresentativesData = {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    role: string
};

export type GetDebitsByStoreOutput = {
    shopping: ShoppingData,
    user: UserData,
    debits: DebitsData,
    action: ActionsData,
    representatives: RepresentativesData
};
