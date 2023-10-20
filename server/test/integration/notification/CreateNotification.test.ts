import { User, Store, Shopping, Notification, UserProps, StoreProps, ShoppingProps, NotificationProps } from "../../../src/domain/entity";
import { CreateNotification } from "../../../src/application/usecase";
import { RepositoryNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory, StoreRepositoryInMemory, ShoppingRepositoryInMemory, NotificationRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";

describe("CreateNotification tests", () => {
    let userData: UserProps;
    let storeData: StoreProps;
    let shoppingData: ShoppingProps;
    let notificationData: NotificationProps;
    let userRepository: UserRepositoryInMemory;
    let storeRepository: StoreRepositoryInMemory;
    let shoppingRepository: ShoppingRepositoryInMemory;
    let notificationRepository: NotificationRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "UserRepository") return userRepository;
            if (repository === "StoreRepository") return storeRepository;
            if (repository === "ShoppingRepository") return shoppingRepository;
            if (repository === "NotificationRepository") return notificationRepository;
            throw new RepositoryNotFoundError();
        }
    };

    beforeEach(() => {
        userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        storeData = {
            id: "66664842-1ae8-44fc-95b1-698836e6d6e0",
            code: "10001",
            name: "LOJA 01"
        };
        shoppingData = {
            id: "78e356d3-b44e-4328-9983-b79d4e684a24",
            code: "10000",
            name: "SHOP01",
            description: "SHOPPING 01"
        };
        notificationData = {
            id: "notification-id",
            content: "notification-content",
            type: "notification-type",
            userId: "notification-user-id",
            storeId: "notification-store-id",
            shoppingId: "notification-shopping-id",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        userRepository = new UserRepositoryInMemory();
        storeRepository = new StoreRepositoryInMemory();
        shoppingRepository = new ShoppingRepositoryInMemory();
        notificationRepository = new NotificationRepositoryInMemory();
    });

    test.skip("Should create a notification", async () => {
        userRepository.users.push(User.restore(userData));
        storeRepository.stores.push(Store.restore(storeData));
        shoppingRepository.shoppings.push(Shopping.restore(shoppingData));
        const notificationRepositorySpy = jest.spyOn(notificationRepository, "save");
        const createNotification = new CreateNotification(repositoryFactoryMock);
        const createNotificationInput = {
            id: notificationData.id,
            content: notificationData.content,
            type: notificationData.type,
            userId: notificationData.userId,
            storeId: notificationData.storeId,
            shoppingId: notificationData.shoppingId
        };
        await createNotification.execute(createNotificationInput);
        expect(notificationRepositorySpy).toHaveBeenCalledTimes(1);
        // expect(notificationRepositorySpy).toHaveBeenCalledWith(createNotificationInput);
    });
});
