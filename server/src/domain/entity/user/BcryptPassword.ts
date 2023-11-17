import { InvalidParamError } from "../../../application/error";
import { hashSync, compareSync } from "bcrypt";

export class BcryptPassword {
    static readonly salt: string | number = 10;

    private constructor (readonly value: string) {}

    static create (value: string): BcryptPassword {
        if (!BcryptPassword.isValid(value)) throw new InvalidParamError("password");
        const hashedPassword = hashSync(value, this.salt);
        return new BcryptPassword(hashedPassword);
    }

    static restore (value: string): BcryptPassword {
        return new BcryptPassword(value);
    }

    validate (value: string): boolean {
        const isValidPassword = compareSync(value, this.value);
        return isValidPassword;
    }

    private static isValid (value: string): boolean {
        if (!value) return false;
        if (!BcryptPassword.isValidLength(value)) return false;
        if (!BcryptPassword.hasLowerCase(value)) return false;
        if (!BcryptPassword.hasUpperCase(value)) return false;
        if (!BcryptPassword.hasSpecialChar(value)) return false;
        if (!BcryptPassword.hasDigits(value)) return false;
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
