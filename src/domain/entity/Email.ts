export default class Email {

    constructor (readonly value: string) {
        if (!this.validate(value)) throw new Error("Invalid email");
    }

    validate (value: string) {
        if (!value) return false;
        return true;
    }
}
