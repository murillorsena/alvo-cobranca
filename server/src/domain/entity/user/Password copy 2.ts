import { pbkdf2, randomBytes } from "crypto";

export default class Password {
    readonly value: string;

    constructor (value: string, isHashed: boolean = false) {
        if (!isHashed) {
            if (!this.validate(value)) throw new Error("Invalid password");
        }
        this.value = value;
    }

    static create (value: string): Promise<Password> {
        const generatedSalt = randomBytes(20).toString("hex");
        const hashedPassword = new Promise<Password>((resolve) => {
            pbkdf2(value, generatedSalt, 100, 64, "sha512", (error, value) => {
                resolve(new Password(value.toString("hex"), true));
            });
        });
        return hashedPassword;
    }

    validate (value: string) {
        if (!value) return false;
        if (!this.isValidLength(value)) return false;
        if (!this.hasLowerCase(value)) return false;
        if (!this.hasUpperCase(value)) return false;
        if (!this.hasSpecialChar(value)) return false;
        if (!this.hasDigits(value)) return false;
        return true;
    }

    private isValidLength (value: string) {
        return value.length >= 8 && value.length <= 20;
    }

    private hasLowerCase (value: string) {
        return /^(?=.*[a-z])/g.test(value);
    }

    private hasUpperCase (value: string) {
        return /^(?=.*[A-Z])/g.test(value);
    }

    private hasSpecialChar (value: string) {
        return /^(?=.*[!@#$%^&*])/g.test(value);
    }

    private hasDigits (value: string) {
        return /^(?=.*[0-9])/g.test(value);
    }
}
