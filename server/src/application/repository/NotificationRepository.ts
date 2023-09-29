import Notification from "../../domain/entity/Notification";
import Repository from "./Repository";

export default interface NotificationRepository extends Repository {
    save (notification: Notification): Promise<void>;
    update (notification: Notification): Promise<void>;
    findById (id: string): Promise<Notification | null>;
    findAllByStoreId (storeId: string): Promise<Notification[]>;
}
