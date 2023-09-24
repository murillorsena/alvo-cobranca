import Entity from "../Entity";
import crypto from "crypto";

export default class Representative implements Entity {

    private constructor (
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly phone: string,
        readonly address: string,
        readonly storeId: string
    ) {}

    static create (name: string, email: string, phone: string, address: string, storeId: string) {
        const representativeId = crypto.randomUUID();
        return new Representative(representativeId, name, email, phone, address, storeId);
    }

    static restore (id: string, name: string, email: string, phone: string, address: string, storeId: string) {
        return new Representative(id, name, email, phone, address, storeId);
    }
}
