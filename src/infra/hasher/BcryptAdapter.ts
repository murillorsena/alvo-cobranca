import Hasher from "./Hasher";
import bcrypt from "bcrypt";

export default class BcryptAdapter implements Hasher {

    constructor (private salt: number) {}

    async encrypt (plaintext: string): Promise<string> {
        return await bcrypt.hash(plaintext, this.salt);
    }

    async decrypt (plaintext: string, digest: string): Promise<boolean> {
        return await bcrypt.compare(plaintext, digest);
    }
}
