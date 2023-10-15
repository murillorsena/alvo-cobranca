import { Notification } from "../../domain/entity";
import { Repository } from "../repository";

export interface NotificationRepository extends Repository {
    save (notification: Notification): Promise<void>;
    update (notification: Notification): Promise<void>;
    findAll (): Promise<Notification[]>;
    findById (id: string): Promise<Notification | null>;
    findAllByStoreId (storeId: string): Promise<Notification[]>;
}
