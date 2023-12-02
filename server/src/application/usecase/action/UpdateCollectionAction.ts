import { CollectionAction, CollectionActionType } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { CollectionActionNotFoundError } from "../../error";
import { CollectionActionRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class UpdateCollectionAction implements UseCase {
    private collectionActionRepository: CollectionActionRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.collectionActionRepository = repositoryFactory.create("CollectionActionRepository") as CollectionActionRepository;
    }

    async execute (input: UpdateCollectionActionInput): Promise<void> {
        const notification = await this.collectionActionRepository.findById(input.notificationId);
        if (!notification) throw new CollectionActionNotFoundError();
        const type = input.type ? input.type : notification.type;
        const title = input.title ? input.title : notification.title;
        const content = input.content ? input.content : notification.content;
        const updatedAt = new Date();
        const props = {
            id: notification.id,
            type: type,
            title: title,
            content: content,
            userId: notification.userId,
            storeId: notification.storeId,
            createdAt: notification.createdAt,
            updatedAt: updatedAt
        };
        const updatedNotification = CollectionAction.restore(props);
        await this.collectionActionRepository.update(updatedNotification);
    }
}

export type UpdateCollectionActionInput = {
    notificationId: string,
    type?: CollectionActionType,
    title?: string,
    content?: string
};
