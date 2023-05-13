import TokenGenerator from "./TokenGenerator";
// import jwt from "jsonwebtoken";

export default class JwtAdapter implements TokenGenerator {

    async generate (email: string, expiresIn: number): Promise<any> {
        // const token = await jwt.
        // return token;
    }

    async verify (token: string): Promise<any> {
        // throw new Error("Method not implemented.");
        // return jwt.verify();
    }
}
