export default class Password {

    constructor (private value: string) {
        if (!this.validate(value)) throw new Error('Invalid password');
    }

    validate (value: string) {
        if (!value) return false;
        if (!this.isValidLength(value)) return false;
        return true;
    }

    private isValidLength (value: string) {
        return value.length >= 8;
    }
}
