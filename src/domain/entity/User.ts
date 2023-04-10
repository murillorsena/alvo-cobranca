import Name from "./Name";
import Email from "./Email";
import Password from "./Password";

export default class User {
    readonly name: Name;
    readonly email: Email;
    private password: Password;

    constructor (name: string, email: string, password: string) {
        this.name = new Name(name);
        this.email = new Email(email);
        this.password = new Password(password);
    }
}
