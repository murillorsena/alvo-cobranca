import { CollectionAction, CollectionActionType } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { UserNotFoundError, StoreNotFoundError } from "../../error";
import { CollectionActionRepository, UserRepository, StoreRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class CreateCollectionAction implements UseCase {
    private collectionActionRepository: CollectionActionRepository;
    private storeRepository: StoreRepository;
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.collectionActionRepository = repositoryFactory.create("CollectionActionRepository") as CollectionActionRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: CreateCollectionActionInput): Promise<CreateCollectionActionOutput> {
        const store = await this.storeRepository.findById(input.storeId);
        if (!store) throw new StoreNotFoundError();
        const user = await this.userRepository.findById(input.userId);
        if (!user) throw new UserNotFoundError();
        const props = {
            type: input.type,
            content: input.content,
            createdAt: new Date(),
            updatedAt: null,
            storeId: store.id,
            userId: user.id
        };
        const collectionAction = CollectionAction.create(props);
        await this.collectionActionRepository.save(collectionAction);
        const output: CreateCollectionActionOutput = {
            id: collectionAction.id,
            type: collectionAction.type,
            content: collectionAction.content,
            username: user.name,
            createdAt: collectionAction.createdAt,
            updatedAt: collectionAction.updatedAt
        };
        return output;
    }
}

export type CreateCollectionActionInput = {
    type: CollectionActionType,
    content: string,
    storeId: string,
    userId: string
};

export type CreateCollectionActionOutput = {
    id: string,
    type: CollectionActionType,
    content: string,
    username: string,
    createdAt: Date,
    updatedAt: Date | null
};
