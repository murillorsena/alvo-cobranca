import { Notification, NotificationProps } from "../../../src/domain/entity";
import { GetNotifications } from "../../../src/application/usecase";
import { RepositoryNotFoundError } from "../../../src/application/error";
import { NotificationRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";

describe("GetNotifications tests", () => {
    let notificationData: NotificationProps;
    let notificationRepository: NotificationRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "NotificationRepository") return notificationRepository;
            throw new RepositoryNotFoundError();
        }
    };

    beforeEach(() => {
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
        notificationRepository = new NotificationRepositoryInMemory();
    });

    test.skip("Should return a list of notifications", async () => {
        notificationRepository.notifications.push(Notification.restore(notificationData));
        const getNotifications = new GetNotifications(repositoryFactoryMock);
        const notifications = await getNotifications.execute();
        const notification = notifications[0];
        expect(notifications).toHaveLength(1);
        expect(notification.id).toBe(notificationData.id);
        expect(notification.content).toBe(notificationData.content);
        expect(notification.type).toBe(notificationData.type);
        expect(notification.userId).toBe(notificationData.userId);
        expect(notification.storeId).toBe(notificationData.storeId);
        expect(notification.shoppingId).toBe(notificationData.shoppingId);
    });

    test.skip("Should return an empty list if notifications not found", async () => {
        const getNotifications = new GetNotifications(repositoryFactoryMock);
        const notifications = await getNotifications.execute();
        expect(notifications).toHaveLength(0);
    });

    test.skip("Should check if repositoryFactory.create was called", async () => {
        const repositoryFactorySpy = jest.spyOn(repositoryFactoryMock, "create");
        const getNotifications = new GetNotifications(repositoryFactoryMock);
        await getNotifications.execute();
        expect(repositoryFactorySpy).toHaveBeenCalledTimes(1);
        expect(repositoryFactorySpy).toHaveBeenCalledWith("NotificationRepository");
    });

    test.skip("Should check if notificationRepository.findAll was called", async () => {
        const notificationRepositorySpy = jest.spyOn(notificationRepository, "findAll");
        const getNotifications = new GetNotifications(repositoryFactoryMock);
        await getNotifications.execute();
        expect(notificationRepositorySpy).toHaveBeenCalledTimes(1);
    });
});
