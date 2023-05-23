import TokenGenerator from "./TokenGenerator";
import jwt from "jsonwebtoken";

export default class JwtAdapter implements TokenGenerator {

    constructor (private secret: any) {}

    async generate (email: string, expiresIn?: string | number): Promise<any> {
        const payload = {
            email
        };
        const options = { 
            expiresIn:  expiresIn ?? "6h"
        };
        const token = jwt.sign(payload, this.secret, options);
        return token;
    }

    async verify (token: string): Promise<any> {
        return jwt.verify(token, this.secret);
    }
}
