export default class Name {
    readonly value: string;

    constructor (value: string) {
        if (!this.validate(value)) throw new Error("Invalid name");
        this.value = value;
    }

    validate (value: string) {
        if (!value) return false;
        return true;
    }
}
