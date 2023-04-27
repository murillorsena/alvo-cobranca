import { randomUUID } from "crypto";

export default class Shopping {
    readonly id: string;

    constructor (
        readonly code: string,
        readonly name: string,
        id?: string
    ) {
        this.id = id || randomUUID();
    }
}
