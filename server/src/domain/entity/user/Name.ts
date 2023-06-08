import InvalidParamError from "../../../application/error/InvalidParamError";

export default class Name {
    readonly value: string;

    constructor (value: string) {
        if (!this.validate(value)) throw new InvalidParamError("name");
        this.value = value;
    }

    validate (value: string) {
        if (!value) return false;
        if (!this.isValidLength(value)) return false;
        return true;
    }

    private isValidLength (value: string) {
        return value.length >= 3 && value.length <= 256;
    }
}
