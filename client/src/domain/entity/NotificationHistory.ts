import { Entity, EntityId, Notification, NotificationProps } from "../entity";
import { DomainEvent } from "../../events";

export default class NotificationHistory extends Entity {
    private notifications: Notification[];

    constructor () {
        super();
        this.notifications = [];
    }

    addNotification (props: Omit<NotificationProps, "id">) {
        const { type, content, userId, storeId, shoppingId, updatedAt } = props;
        const id = EntityId.generate();
        const createdAt = new Date();
        const notification = new Notification(id, type, content, userId, storeId, shoppingId, createdAt, updatedAt);
        this.notifications.push(notification);
        this.publish(new DomainEvent("addNotification", notification));
    }
}
