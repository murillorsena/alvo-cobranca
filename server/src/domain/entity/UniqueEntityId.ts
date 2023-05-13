import { randomUUID } from "crypto";

export default class UniqueEntityId {
    readonly value: string;

    constructor (value?: string) {
        this.value = value ?? randomUUID();
    }
}
