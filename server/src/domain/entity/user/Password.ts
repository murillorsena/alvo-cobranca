import InvalidParamError from "../../../application/error/InvalidParamError";
import { pbkdf2Sync } from "crypto";

export default class Password {
    private static ITERATIONS = 100;
    private static KEY_LENGTH = 64;
    private static DIGEST = "sha512";
    readonly value: string;

    private constructor (value: string) {
        this.value = value;
    }

    static create (value: string, salt: string) {
        if (!Password.validate(value)) throw new InvalidParamError("password");
        const hashedPassword = pbkdf2Sync(value, salt, Password.ITERATIONS, Password.KEY_LENGTH, Password.DIGEST).toString("hex");
        return new Password(hashedPassword);
    }

    static restore (value: string) {
        return new Password(value);
    }

    isValid (password: string, salt: string) {
        const hashedPassword = pbkdf2Sync(password, salt, Password.ITERATIONS, Password.KEY_LENGTH, Password.DIGEST).toString("hex");
        return hashedPassword === this.value;
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
