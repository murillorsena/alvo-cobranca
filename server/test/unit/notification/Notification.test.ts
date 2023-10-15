import { Notification, NotificationProps } from "../../../src/domain/entity";

describe("Notification unit tests", () => {
    let notificationData: NotificationProps;

    beforeEach(() => {
        notificationData = {
            id: "5828f8f2-6174-11ee-8c99-0242ac120002",
            type: "",
            content: "",
            userId: "",
            shoppingId: "",
            storeId: ""
        };
    });

    test("Should create a notification", () => {
        const notification = Notification.create(notificationData);
        expect(notification.id).toBeDefined();
        expect(notification.type).toBe(notificationData.type);
        expect(notification.content).toBe(notificationData.content);
        expect(notification.userId).toBe(notificationData.userId);
        expect(notification.storeId).toBe(notificationData.storeId);
        expect(notification.shoppingId).toBe(notificationData.shoppingId);
    });
    
    test("Should restore a database notification", () => {
        const notification = Notification.restore(notificationData);
        expect(notification.id).toBe(notificationData.id);
        expect(notification.type).toBe(notificationData.type);
        expect(notification.content).toBe(notificationData.content);
        expect(notification.userId).toBe(notificationData.userId);
        expect(notification.storeId).toBe(notificationData.storeId);
        expect(notification.shoppingId).toBe(notificationData.shoppingId);
    });
});
