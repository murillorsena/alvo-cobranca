import Notification from "../../../domain/entity/Notification";
import NotificationRepository from "../../../application/repository/NotificationRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class NotificationRepositoryDatabase implements NotificationRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (notificationData: any): Notification {
        const props = {
            id: notificationData["id"],
            type: notificationData["type"],
            content: notificationData["content"],
            userId: notificationData["user_id"],
            storeId: notificationData["store_id"],
            shoppingId: notificationData["shopping_id"],
            createAt: notificationData["created_at"],
            updatedAt: notificationData["updated_at"]
        };
        return Notification.restore(props);
    }

    async save (notification: Notification): Promise<void> {
        const { id, type, content, userId, storeId, shoppingId, createdAt } = notification;
        const query = `
            INSERT INTO "notification" ("id", "type", "content", "user_id", "store_id", "shopping_id", "created_at")
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
        await this.connection.query(query, [ id, type, content, userId, storeId, shoppingId, createdAt ]);
    }
    
    async update (notification: Notification): Promise<void> {
        const { id, type, content, updatedAt } = notification;
        const query = `
            UPDATE "notification"
            SET "type" = ?, "content" = ?, "updated_at" = ?
            WHERE "id" = ?;
        `;
        await this.connection.query(query, [ type, content, updatedAt, id ]);
    }

    async findById (id: string): Promise<Notification | null> {
        const query = `
            SELECT "id", "type", "content", "user_id", "store_id", "shopping_id", "created_at"
            FROM "notification"
            WHERE "id" = ?;
        `;
        const notificationData = await this.connection.query(query, id);
        if (!notificationData) return null;
        const notification = this.restore(notificationData);
        return notification;
    }
    
    async findAllByStoreId (storeId: string): Promise<Notification[]> {
        const query = `
            SELECT "id", "type", "content", "user_id", "store_id", "shopping_id", "created_at"
            FROM "notification"
            WHERE "store_id" = ?;
        `;
        const notificationsData = await this.connection.query(query, storeId );
        const notifications: Notification[] = [];
        for (const notificationData of notificationsData) {
            const notification = this.restore(notificationData);
            notifications.push(notification);
        }
        return notifications;
    }
}
