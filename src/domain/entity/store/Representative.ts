import { randomUUID } from "crypto";

export default class Representative {
    readonly id: string;

    constructor (
        readonly name: string,
        readonly email: string,
        readonly phone: string,
        readonly address: string,
        readonly storeId: string,
        id?: string
    ) {
        this.id = id || randomUUID();
    }
}
