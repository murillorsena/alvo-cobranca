import { Notification } from "../../../domain/entity";
import { NotificationRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database/DatabaseConnection";

export class NotificationRepositoryPostgre implements NotificationRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (notificationData: any): Notification {
        const notificationProps = {
            id: notificationData.id,
            type: notificationData.type,
            content: notificationData.content,
            userId: notificationData.user_id,
            storeId: notificationData.store_id,
            shoppingId: notificationData.shopping_id,
            createdAt: notificationData.created_at,
            updatedAt: notificationData.updated_at
        };
        return Notification.restore(notificationProps);
    }

    async save (notification: Notification): Promise<void> {
        const { id, type, content, userId, storeId, shoppingId, createdAt } = notification;
        const statement = `
            INSERT INTO "notification" ("id", "type", "content", "user_id", "store_id", "shopping_id", "created_at", "updated_at")
            VALUES ($1, $2, $3, $4, $5, $6, $7);
        `;
        const params = [ id, type, content, userId, storeId, shoppingId, createdAt ];
        await this.connection.query(statement, params);
    }
    
    async update (notification: Notification): Promise<void> {
        const { id, type, content, updatedAt } = notification;
        const statement = `
            UPDATE "notification"
            SET "type" = $1, "content" = $2, "updated_at" = $3
            WHERE "id" = $4;
        `;
        const params = [ type, content, updatedAt, id ];
        await this.connection.query(statement, params);
    }

    async findAll (): Promise<Notification[]> {
        const statement = `
            SELECT "id", "type", "content", "user_id", "store_id", "shopping_id", "created_at", "updated_at"
            FROM "notification";
        `;
        const notificationsData = await this.connection.query(statement, []);
        const notifications: Notification[] = [];
        for (const notificationData of notificationsData) {
            const notification = this.restore(notificationData);
            notifications.push(notification);
        }
        return notifications;
    }

    async findById (id: string): Promise<Notification | null> {
        const statement = `
            SELECT "id", "type", "content", "user_id", "store_id", "shopping_id", "created_at"
            FROM "notification"
            WHERE "id" = $1;
        `;
        const notificationData = await this.connection.query(statement, id);
        if (!notificationData) return null;
        const notification = this.restore(notificationData);
        return notification;
    }
    
    async findAllByStoreId (storeId: string): Promise<Notification[]> {
        const statement = `
            SELECT "id", "type", "content", "user_id", "store_id", "shopping_id", "created_at"
            FROM "notification"
            WHERE "store_id" = $1;
        `;
        const notificationsData = await this.connection.query(statement, storeId);
        const notifications: Notification[] = [];
        for (const notificationData of notificationsData) {
            const notification = this.restore(notificationData);
            notifications.push(notification);
        }
        return notifications;
    }
}
