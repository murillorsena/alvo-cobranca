import { pbkdf2, randomBytes } from "crypto";

export default class Password {
    private static ITERATIONS = 100;
    private static KEY_LENGTH = 64;
    private static DIGEST = "sha512";
    readonly value: string;
    // readonly salt: string;

    constructor (value: string, salt?: string) {
        this.value = value;
        // this.salt = salt;
    }

    static create (value: string): Promise<Password> {
        if (!Password.validate(value)) throw new Error("Invalid password");
        const generatedSalt = randomBytes(20).toString("hex");
        const hashedPassword = new Promise<Password>((resolve) => {
            pbkdf2(value, generatedSalt, Password.ITERATIONS, Password.KEY_LENGTH, Password.DIGEST, (error, value) => {
                resolve(new Password(value.toString("hex"), generatedSalt));
            });
        });
        return hashedPassword;
    }

    // isValid (password: string): Promise<boolean> {
    //     return new Promise((resolve) => {
    //         pbkdf2(password, this.salt, Password.ITERATIONS, Password.KEY_LENGTH, Password.DIGEST, (error, value) => {
    //             resolve(this.value === value.toString("hex"));
    //         });
    //     });
    // }

    private static validate (value: string) {
        if (!value) return false;
        if (!Password.isValidLength(value)) return false;
        if (!Password.hasLowerCase(value)) return false;
        if (!Password.hasUpperCase(value)) return false;
        if (!Password.hasSpecialChar(value)) return false;
        if (!Password.hasDigits(value)) return false;
        return true;
    }

    private static isValidLength (value: string) {
        return value.length >= 8 && value.length <= 20;
    }

    private static hasLowerCase (value: string) {
        return /^(?=.*[a-z])/g.test(value);
    }

    private static hasUpperCase (value: string) {
        return /^(?=.*[A-Z])/g.test(value);
    }

    private static hasSpecialChar (value: string) {
        return /^(?=.*[!@#$%^&*])/g.test(value);
    }

    private static hasDigits (value: string) {
        return /^(?=.*[0-9])/g.test(value);
    }
}
