import { CollectionAction } from "../domain/entity";
import { CollectionActionService } from "../services";
import { HttpClient } from "../infra/http";

export class CollectionActionServiceHttp implements CollectionActionService {

    constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {}

    async add (input: CollectionActionServiceHttpInput): Promise<CollectionAction> {
        const url = `${this.baseUrl}/actions`;
        const data = input;
        const response = await this.httpClient.post(url, data);
        return response;
    }

    async update (input: CollectionActionServiceHttpInput): Promise<void> {
        const url = `${this.baseUrl}/actions`;
        // const data = collectionAction;
        const data = {
            content: input
        };
        await this.httpClient.put(url, data);
    }
}

type CollectionActionServiceHttpInput = {
    type: string,
    content: string,
    storeId: string,
    userId: string
};
