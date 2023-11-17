import { Entity, EntityId } from "../../entity";

export class Notification implements Entity {

    private constructor (
        readonly id: string,
        public type: NotificationType,
        public content: string,
        readonly userId: string,
        readonly storeId: string,
        readonly shoppingId: string,
        readonly createdAt: Date,
        public updatedAt?: Date | null
    ) {}

    static create (props: Omit<Notification, "id">): Notification {
        const { type, content, userId, storeId, shoppingId } = props;
        const id = EntityId.generate();
        const createdAt = new Date();
        return new Notification(id, type, content, userId, storeId, shoppingId, createdAt);
    }
    
    static restore (props: NotificationProps): Notification {
        const { id, type, content, userId, storeId, shoppingId, createdAt, updatedAt } = props;
        return new Notification(id, type, content, userId, storeId, shoppingId, new Date(createdAt), updatedAt);
    }
}

export type NotificationType = "call" | "email" | "message" | "meeting";

export type NotificationProps = {
    id: string,
    type: NotificationType,
    content: string,
    userId: string,
    storeId: string,
    shoppingId: string,
    createdAt: Date,
    updatedAt?: Date | null
};
