import { pbkdf2, randomBytes } from "crypto";

export default class Password {

    private constructor (
        readonly value: string, 
        readonly salt: string
    ) {
    }
    
    static create (value: string, salt?: string): Promise<Password> {
        const generatedSalt = salt || randomBytes(12).toString("hex");
        return new Promise((resolve) => {
            pbkdf2(value, generatedSalt, 100, 64, "sha512", (error, value) => {
                resolve(new Password(value.toString("hex"), generatedSalt));
            });
        });
    }

    verify (password: string): Promise<boolean> {
        return new Promise((resolve) => {
            pbkdf2(password, this.salt, 100, 64, "sha512", (error, value) => {
                resolve(this.value === value.toString("hex"));
            });
        });
    }
}
