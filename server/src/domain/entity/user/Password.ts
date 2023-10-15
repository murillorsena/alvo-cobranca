import { InvalidParamError } from "../../../application/error";
import { pbkdf2Sync } from "crypto";

export class Password {
    private static SALT = "12";
    private static ITERATIONS = 100;
    private static KEY_LENGTH = 64;
    private static DIGEST = "sha512";

    private constructor (readonly value: string) {
        this.value = value;
    }

    static create (value: string): Password {
        if (!Password.validate(value)) throw new InvalidParamError("password");
        const hashedPassword = pbkdf2Sync(value, Password.SALT, Password.ITERATIONS, Password.KEY_LENGTH, Password.DIGEST).toString("hex");
        return new Password(hashedPassword);
    }

    static restore (value: string): Password {
        return new Password(value);
    }

    isValid (password: string): boolean {
        // console.log("isValid password: ", password);
        // console.log("isValid hashedPassword: ", hashedPassword);
        const hashedPassword = pbkdf2Sync(password, Password.SALT, Password.ITERATIONS, Password.KEY_LENGTH, Password.DIGEST).toString("hex");
        return hashedPassword === this.value;
    }

    private static validate (value: string): boolean {
        if (!value) return false;
        if (!Password.isValidLength(value)) return false;
        if (!Password.hasLowerCase(value)) return false;
        if (!Password.hasUpperCase(value)) return false;
        if (!Password.hasSpecialChar(value)) return false;
        if (!Password.hasDigits(value)) return false;
        return true;
    }

    private static isValidLength (value: string): boolean {
        return value.length >= 8 && value.length <= 20;
    }

    private static hasLowerCase (value: string): boolean {
        return /^(?=.*[a-z])/g.test(value);
    }

    private static hasUpperCase (value: string): boolean {
        return /^(?=.*[A-Z])/g.test(value);
    }

    private static hasSpecialChar (value: string): boolean {
        return /^(?=.*[!@#$%^&*])/g.test(value);
    }

    private static hasDigits (value: string): boolean {
        return /^(?=.*[0-9])/g.test(value);
    }
}
