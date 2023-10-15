import { InvalidParamError } from "../../../application/error";

export class Name {

    private constructor (readonly value: string) {
        this.value = value;
    }

    static create (value: string): Name {
        if (!Name.validate(value)) throw new InvalidParamError("name");
        return new Name(value);
    }

    static restore (value: string): Name {
        return new Name(value);
    }

    static validate (value: string): boolean {
        if (!value) return false;
        if (!Name.isValidLength(value)) return false;
        return true;
    }

    private static isValidLength (value: string): boolean {
        return value.length >= 3 && value.length <= 256;
    }
}
