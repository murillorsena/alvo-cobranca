import Entity from "../Entity";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import crypto from "crypto";

export default class User implements Entity {

    private constructor (
        readonly id: string,
        readonly name: Name,
        readonly email: Email,
        readonly password: Password
    ) {}

    static create (props: Omit<UserProps, "id">, salt: string): User {
        const { name, email, password } = props;
        const userId = crypto.randomUUID();
        return new User(userId, new Name(name), new Email(email), Password.create(password, salt));
    }

    static restore (props: UserProps): User {
        const { id, name, email, password } = props;
        return new User(id, new Name(name), new Email(email), new Password(password));
    }
    
    validadePassword (password: string, salt: string): boolean {
        return this.password.isValid(password, salt);
    }
}

type UserProps = {
    id: string,
    name: string,
    email: string,
    password: string
};
