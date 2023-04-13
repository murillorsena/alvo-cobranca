import Name from "../../value-object/user/Name";
import Email from "../../value-object/user/Email";
import Password from "../../value-object/user/Password";
import crypto from "crypto";

export default class User {
    readonly id: string;
    readonly name: Name;
    readonly email: Email;
    readonly password: Password;

    constructor (name: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.name = new Name(name);
        this.email = new Email(email);
        this.password = new Password(password);
    }
}
