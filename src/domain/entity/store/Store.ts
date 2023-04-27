import { randomUUID } from "crypto";

export default class Store {
    readonly id: string;

    constructor (
        readonly code: string,
        readonly name: string,
        id?: string
    ) {
        this.id = id || randomUUID();
    }
}
