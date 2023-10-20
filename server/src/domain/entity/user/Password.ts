export abstract class Password {

    constructor (readonly value: string) {}

    abstract create (value: string): Password;

    abstract restore (value: string): Password;

    abstract isValid (password: string): boolean;

    validate (value: string): boolean {
        if (!value) return false;
        if (!this.isValidLength(value)) return false;
        if (!this.hasLowerCase(value)) return false;
        if (!this.hasUpperCase(value)) return false;
        if (!this.hasSpecialChar(value)) return false;
        if (!this.hasDigits(value)) return false;
        return true;
    }

    isValidLength (value: string): boolean {
        return value.length >= 8 && value.length <= 20;
    }

    hasLowerCase (value: string): boolean {
        return /^(?=.*[a-z])/g.test(value);
    }

    hasUpperCase (value: string): boolean {
        return /^(?=.*[A-Z])/g.test(value);
    }

    hasSpecialChar (value: string): boolean {
        return /^(?=.*[!@#$%^&*])/g.test(value);
    }

    hasDigits (value: string): boolean {
        return /^(?=.*[0-9])/g.test(value);
    }
}
