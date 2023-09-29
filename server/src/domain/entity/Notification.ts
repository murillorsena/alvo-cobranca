import Entity from "./Entity";

export default class Notification implements Entity {

    private constructor (
        readonly id: string,
        readonly type: string,
        readonly content: string,
        readonly userId: string,
        readonly storeId: string,
        readonly shoppingId: string,
        readonly createdAt: Date,
        readonly updatedAt?: Date | null
    ) {}

    static create (props: NotificationProps): Notification {
        const { type, content, userId, storeId, shoppingId } = props;
        const notificationId = crypto.randomUUID();
        const createdAt = new Date();
        return new Notification(notificationId, type, content, userId, storeId, shoppingId, createdAt);
    }
    
    static restore (props: NotificationProps): Notification {
        const { id, type, content, userId, storeId, shoppingId, createdAt, updatedAt } = props;
        return new Notification(id, type, content, userId, storeId, shoppingId, createdAt, updatedAt);
    }
}

type NotificationProps = {
    id: string,
    type: string,
    content: string,
    userId: string,
    storeId: string,
    shoppingId: string,
    createdAt: Date,
    updatedAt?: Date | null
};
