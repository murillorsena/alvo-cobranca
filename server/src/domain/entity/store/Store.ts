import Entity from "../Entity";
import crypto from "crypto";

export default class Store implements Entity {

    private constructor (
        readonly id: string,
        readonly code: string,
        readonly name: string,
    ) {}

    static create (code: string, name: string) {
        const storeId = crypto.randomUUID();
        return new Store(storeId, code, name);
    }

    static restore (id: string, code: string, name: string) {
        return new Store(id, code, name);
    }
}
