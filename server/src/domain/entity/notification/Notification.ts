import { Entity, EntityId } from "../index";

export class Notification implements Entity {

    private constructor (
        readonly id: string,
        public type: string,
        public content: string,
        readonly userId: string,
        readonly storeId: string,
        readonly shoppingId: string,
        readonly createdAt?: Date | null,
        public updatedAt?: Date | null
    ) {}

    static create (props: Omit<Notification, "id">): Notification {
        const { type, content, userId, storeId, shoppingId } = props;
        const notificationId = EntityId.generate();
        const createdAt = new Date();
        return new Notification(notificationId, type, content, userId, storeId, shoppingId, createdAt);
    }
    
    static restore (props: NotificationProps): Notification {
        const { id, type, content, userId, storeId, shoppingId, createdAt, updatedAt } = props;
        return new Notification(id, type, content, userId, storeId, shoppingId, createdAt, updatedAt);
    }
}

export type NotificationProps = {
    id: string,
    type: string,
    content: string,
    userId: string,
    storeId: string,
    shoppingId: string,
    createdAt?: Date | null,
    updatedAt?: Date | null
};
