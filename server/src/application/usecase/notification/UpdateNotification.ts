import { Notification } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { NotificationNotFoundError } from "../../error";
import { NotificationRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";

export class UpdateNotification implements UseCase {
    private notificationRepository: NotificationRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.notificationRepository = repositoryFactory.create("NotificationRepository") as NotificationRepository;
    }

    async execute (input: UpdateNotificationInput): Promise<void> {
        const notification = await this.notificationRepository.findById(input.notificationId);
        if (!notification) throw new NotificationNotFoundError();
        const type = input.type ? input.type : notification.type;
        const content = input.content ? input.content : notification.content;
        const updatedAt = new Date();
        const props = {
            id: notification.id,
            type: type,
            content: content,
            userId: notification.userId,
            storeId: notification.storeId,
            shoppingId: notification.shoppingId,
            createdAt: notification.createdAt,
            updatedAt: updatedAt
        };
        const updatedNotification = Notification.restore(props);
        await this.notificationRepository.update(updatedNotification);
    }
}

export type UpdateNotificationInput = {
    notificationId: string,
    type?: string,
    content?: string
};
