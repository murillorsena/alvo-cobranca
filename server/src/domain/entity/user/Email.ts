import InvalidParamError from "../../../application/error/InvalidParamError";

export default class Email {
    readonly value: string;

    constructor (value: string) {
        if (!this.validate(value)) throw new InvalidParamError("email");
        this.value = value;
    }

    validate (value: string) {
        if (!value) return false;
        if (!this.isValidLength(value)) return false;
        if (!this.isValidFormat(value)) return false;
        return true;
    }

    private isValidLength (value: string) {
        return value.length >= 8 && value.length <= 256;
    }

    private isValidFormat (value: string) {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{3,}$/;
        return emailRegex.test(value);
    }
}
