import { randomUUID } from "crypto";

export default class EntityId {
    readonly value: string;

    constructor (value?: string) {
        this.value = value ?? randomUUID();
    }
}
