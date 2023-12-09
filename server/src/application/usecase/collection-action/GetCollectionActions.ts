import { UseCase } from "../../usecase";
import { CollectionActionRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class GetCollectionActions implements UseCase {
    private collectionActionRepository: CollectionActionRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.collectionActionRepository = repositoryFactory.create("CollectionActionRepository") as CollectionActionRepository;
    }

    async execute (): Promise<GetCollectionActionOuput[]> {
        const collectionActions = await this.collectionActionRepository.findAll();
        const output: GetCollectionActionOuput[] = [];
        for (const collectionAction of collectionActions) {
            output.push({
                id: collectionAction.id,
                type: collectionAction.type,
                content: collectionAction.content,
                createdAt: collectionAction.createdAt,
                updatedAt: collectionAction.updatedAt,
                storeId: collectionAction.storeId,
                userId: collectionAction.userId
            });
        }
        return output;
    }
}

export type GetCollectionActionOuput = {
    id: string,
    type: string,
    content: string,
    createdAt: Date,
    updatedAt: Date | null,
    storeId: string,
    userId: string
};
