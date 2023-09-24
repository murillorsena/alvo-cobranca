import Entity from "../Entity";
import crypto from "crypto";

export default class Shopping implements Entity {
    
    private constructor (
        readonly id: string,
        readonly code: string,
        readonly name: string, 
        readonly description: string, 
    ) {}

    static create (code: string, name: string, description: string) {
        const shoppingId = crypto.randomUUID();
        return new Shopping(shoppingId, code, name, description);
    }

    static restore (id: string, code: string, name: string, description: string) {
        return new Shopping(id, code, name, description);
    }
}
