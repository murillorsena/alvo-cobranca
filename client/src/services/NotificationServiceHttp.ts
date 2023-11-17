import { NotificationProps } from "../domain/entity";
import { NotificationService } from "../services";
import { HttpClient } from "../infra/http";

export class NotificationServiceHttp implements NotificationService {

    constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {}

    async add (notification: NotificationProps): Promise<void> {
        const url = `${this.baseUrl}/notifications`;
        const data = notification;
        await this.httpClient.post(url, data);
    }
}
