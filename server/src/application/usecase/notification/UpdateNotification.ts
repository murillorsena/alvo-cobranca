import Notification from "../../../domain/entity/Notification";
import UseCase from "../UseCase";
import RepositoryFactory from "../../factory/RepositoryFactory";
import NotificationRepository from "../../repository/NotificationRepository";

export default class UpdateNotification implements UseCase {
    private notificationRepository: NotificationRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.notificationRepository = repositoryFactory.create("NotificationRepository") as NotificationRepository;
    }

    async execute (input: Input): Promise<void> {
        const notification = await this.notificationRepository.findById(input.notificationId)
        if (!notification) throw new Error("Notification not found.");
        const type = input.type ? input.type : notification.type;
        const content = input.content ? input.content : notification.content;
        const updatedAt = new Date();
        const updatedNotification = Notification.restore(
            notification.id,
            type,
            content,
            notification.userId,
            notification.storeId,
            notification.shoppingId,
            notification.createdAt,
            updatedAt
        );
        await this.notificationRepository.update(updatedNotification);
    }
}

type Input = {
    notificationId: string,
    type?: string,
    content?: string
};
