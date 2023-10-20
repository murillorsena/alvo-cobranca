import { Notification, NotificationProps } from "../../../src/domain/entity";
import { UpdateNotification } from "../../../src/application/usecase";
import { NotificationRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";

describe("UpdateNotification tests", () => {
    let notificationData: NotificationProps;
    let notificationRepository: NotificationRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "NotificationRepository") return notificationRepository;
            throw new Error("Repository not implemented.");
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

    test.skip("", async () => {

    });
});
