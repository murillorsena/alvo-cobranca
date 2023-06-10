import EntityId from "../EntityId";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";

export default class User {

    private constructor (
        readonly name: Name, 
        readonly email: Email, 
        readonly password: Password, 
        readonly id: EntityId
    ) {}

    static create (name: string, email: string, password: string, salt: string, id?: string) {
        return new User(new Name(name), new Email(email), Password.create(password, salt), new EntityId(id));
    }
    
    static restore (name: string, email: string, hashedPassword: string, id?: string) {
        return new User(new Name(name), new Email(email), Password.restore(hashedPassword), new EntityId(id));
    }

    validadePassword (password: string, salt: string) {
        return this.password.isValid(password, salt);
    }
}
