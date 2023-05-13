import { pbkdf2, randomBytes } from "crypto";

export default class Password {
    readonly value: string;

    constructor (value: string) {
        this.value = value;
    }

    static create (value: string): Promise<Password> {
        if (!Password.validate(value)) throw new Error("Invalid password");
        const generatedSalt = randomBytes(20).toString("hex");
        const hashedPassword = new Promise<Password>((resolve) => {
            pbkdf2(value, generatedSalt, 100, 64, "sha512", (error, value) => {
                resolve(new Password(value.toString("hex")));
            });
        });
        return hashedPassword;
    }

    private static validate (value: string) {
        if (!value) return false;
        if (!Password.isValidLength(value)) return false;
        if (!Password.hasLowerCase(value)) return false;
        if (!Password.hasUpperCase(value)) return false;
        if (!Password.hasSpecialChar(value)) return false;
        if (!Password.hasDigits(value)) return false;
        return true;
    }

    private static isValidLength (value: string) {
        return value.length >= 8 && value.length <= 20;
    }

    private static hasLowerCase (value: string) {
        return /^(?=.*[a-z])/g.test(value);
    }

    private static hasUpperCase (value: string) {
        return /^(?=.*[A-Z])/g.test(value);
    }

    private static hasSpecialChar (value: string) {
        return /^(?=.*[!@#$%^&*])/g.test(value);
    }

    private static hasDigits (value: string) {
        return /^(?=.*[0-9])/g.test(value);
    }
}
