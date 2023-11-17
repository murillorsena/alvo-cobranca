import { NotificationProps } from "../domain/entity";

export interface NotificationService {
    add (notification: NotificationProps): Promise<void>;
}
