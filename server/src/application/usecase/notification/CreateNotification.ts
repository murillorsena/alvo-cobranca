import { Notification, NotificationType } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { UserNotFoundError, StoreNotFoundError, ShoppingNotFoundError } from "../../error";
import { NotificationRepository, UserRepository, StoreRepository, ShoppingRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";

export class CreateNotification implements UseCase {
    private notificationRepository: NotificationRepository;
    private userRepository: UserRepository;
    private storeRepository: StoreRepository;
    private shoppingRepository: ShoppingRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.notificationRepository = repositoryFactory.create("NotificationRepository") as NotificationRepository;
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.shoppingRepository = repositoryFactory.create("ShoppingRepository") as ShoppingRepository;
    }

    async execute (input: CreateNotificationInput): Promise<void> {
        const user = await this.userRepository.findById(input.userId);
        if (!user) throw new UserNotFoundError();
        const store = await this.storeRepository.findById(input.storeId);
        if (!store) throw new StoreNotFoundError();
        const shopping = await this.shoppingRepository.findById(input.shoppingId);
        if (!shopping) throw new ShoppingNotFoundError();
        const props = {
            type: input.type,
            content: input.content,
            userId: user.id,
            storeId: store.id,
            shoppingId: shopping.id,
            createdAt: new Date()
        };
        const notification = Notification.create(props);
        await this.notificationRepository.save(notification);
    }
}

export type CreateNotificationInput = {
    type: NotificationType,
    content: string,
    userId: string,
    storeId: string,
    shoppingId: string,
    createdAt: Date
};
