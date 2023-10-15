import { Notification } from "../../../domain/entity";
import { NotificationRepository } from "../../../application/repository";

export class NotificationRepositoryInMemory implements NotificationRepository {
    notifications: Notification[];

    constructor () {
        this.notifications = [];
    }

    async save (notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }
    
    async update (notification: Notification): Promise<void> {
        const { id, type, content } = notification;
        this.notifications.find(notification => {
            if (notification.id === id) {
                notification.type = type;
                notification.content = content;
                notification.updatedAt = new Date();
            }
        });
    }

    async findAll (): Promise<Notification[]> {
        const notifications = this.notifications;
        return notifications;
    }

    async findById (id: string): Promise<Notification | null> {
        const notification = this.notifications.find(notification => notification.id === id);
        if (!notification) return null;
        return notification;
    }
    
    async findAllByStoreId (storeId: string): Promise<Notification[]> {
        const notifications = this.notifications.filter(notification => notification.storeId === storeId);
        return notifications;
    }
}
