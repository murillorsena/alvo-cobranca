import { CollectionAction, CollectionActionType } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { UserNotFoundError, StoreNotFoundError } from "../../error";
import { CollectionActionRepository, UserRepository, StoreRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class CreateCollectionAction implements UseCase {
    private collectionActionRepository: CollectionActionRepository;
    private userRepository: UserRepository;
    private storeRepository: StoreRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.collectionActionRepository = repositoryFactory.create("CollectionActionRepository") as CollectionActionRepository;
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
    }

    async execute (input: CreateCollectionActionInput): Promise<void> {
        const user = await this.userRepository.findById(input.userId);
        if (!user) throw new UserNotFoundError();
        const store = await this.storeRepository.findById(input.storeId);
        if (!store) throw new StoreNotFoundError();
        const props = {
            type: input.type,
            title: input.title,
            content: input.content,
            createdAt: new Date(),
            updatedAt: null,
            storeId: store.id,
            userId: user.id
        };
        const collectionAction = CollectionAction.create(props);
        await this.collectionActionRepository.save(collectionAction);
    }
}

export type CreateCollectionActionInput = {
    type: CollectionActionType,
    title: string,
    content: string,
    createdAt: Date,
    storeId: string,
    userId: string
};
