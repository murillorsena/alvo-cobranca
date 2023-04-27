
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import { randomUUID } from "crypto";

export default class User {
    readonly id: string;
    readonly name: Name;
    readonly email: Email;
    readonly password: Password;

    constructor (name: string, email: string, password: string, id?: string) {
        this.id = id || randomUUID();
        this.name = new Name(name);
        this.email = new Email(email);
        this.password = new Password(password);
    }
}
