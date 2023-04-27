export default class Email {
    readonly value: string;

    constructor (value: string) {
        if (!this.validate(value)) throw new Error("Invalid email");
        this.value = value;
    }

    validate (value: string) {
        if (!value) return false;
        if (!this.isValid(value)) return false;
        return true;
    }

    private isValid (value: string) {
        return /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{3,}$/.test(value);
    }
}
