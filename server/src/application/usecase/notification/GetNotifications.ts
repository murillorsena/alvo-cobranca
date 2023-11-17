import { UseCase } from "../../usecase";
import { RepositoryFactory } from "../../factory";
import { NotificationRepository } from "../../repository";

export class GetNotifications implements UseCase {
    private notificationRepository: NotificationRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.notificationRepository = repositoryFactory.create("NotificationRepository") as NotificationRepository;
    }

    async execute (): Promise<GetNotificationOuput[]> {
        const notifications = await this.notificationRepository.findAll();
        const output: GetNotificationOuput[] = [];
        for (const notification of notifications) {
            output.push({
                id: notification.id,
                type: notification.type,
                content: notification.content,
                userId: notification.userId,
                storeId: notification.storeId,
                shoppingId: notification.shoppingId,
                createdAt: notification.createdAt,
                updatedAt: notification.updatedAt,
            });
        }
        return output;
    }
}

export type GetNotificationOuput = {
    id: string,
    type: string,
    content: string,
    userId: string,
    storeId: string,
    shoppingId: string,
    createdAt: Date,
    updatedAt: Date | null | undefined
};
