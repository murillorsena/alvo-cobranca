import { InvalidParamError } from "../../../application/error";

export class Email {

    private constructor (readonly value: string) {}

    static create (value: string): Email {
        if (!Email.validate(value)) throw new InvalidParamError("email");
        return new Email(value);
    }

    static restore (value: string): Email {
        return new Email(value);
    }

    static validate (value: string): boolean {
        if (!value) return false;
        if (!Email.isValidLength(value)) return false;
        if (!Email.isValidFormat(value)) return false;
        return true;
    }

    private static isValidLength (value: string): boolean {
        return value.length >= 8 && value.length <= 256;
    }

    private static isValidFormat (value: string): boolean {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{3,}$/;
        return emailRegex.test(value);
    }
}
