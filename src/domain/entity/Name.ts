export default class Name {

    constructor (readonly value: string) {
        if (!this.validate(value)) throw new Error('Invalid name');
    }

    validate (value: string) {
        if (!value) return false;
        return true;
    }
}
