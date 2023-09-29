import Notification from "../../../domain/entity/Notification";
import UseCase from "../UseCase";
import RepositoryFactory from "../../factory/RepositoryFactory";
import NotificationRepository from "../../repository/NotificationRepository";
import UserRepository from "../../repository/UserRepository";
import StoreRepository from "../../repository/StoreRepository";
import ShoppingRepository from "../../repository/ShoppingRepository";

export default class CreateNotification implements UseCase {
    private notificationRepository: NotificationRepository;
    private userRepository: UserRepository;
    private storeRepository: StoreRepository;
    private shoppingRepository: ShoppingRepository;

    constructor (
        repositoryFactory: RepositoryFactory
    ) {
        this.notificationRepository = repositoryFactory.create("NotificationRepository") as NotificationRepository;
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
        this.storeRepository = repositoryFactory.create("StoreRepository") as StoreRepository;
        this.shoppingRepository = repositoryFactory.create("ShoppingRepository") as ShoppingRepository;
    }

    async execute (input: Input): Promise<void> {
        const user = await this.userRepository.findById(input.userId);
        if (!user) throw new Error("User not found.");
        const store = await this.storeRepository.findById(input.storeId);
        if (!store) throw new Error("Store not found.");
        const shopping = await this.shoppingRepository.findById(input.shoppingId);
        if (!shopping) throw new Error("Shopping not found.");
        const notification = Notification.create(input.type, input.content, user.id, store.id, shopping.id);
        await this.notificationRepository.save(notification);
    }
}

type Input = {
    type: string,
    content: string,
    userId: string,
    storeId: string,
    shoppingId: string
};
