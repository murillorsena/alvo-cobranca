import crypto from "crypto";

export class EntityId {

    static generate (): string {
        return crypto.randomUUID();
    }
}
