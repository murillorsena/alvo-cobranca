import UniqueEntityId from "../UniqueEntityId";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";

export default class User {

    private constructor (
        readonly name: Name, 
        readonly email: Email, 
        readonly password: Password, 
        readonly id: UniqueEntityId
    ) {}

    static async create (name: string, email: string, password: string, id?: string) {
        return new User(new Name(name), new Email(email), await Password.create(password), new UniqueEntityId(id));
    }
    
    static buildExistingUser (name: string, email: string, hashedPassword: string, id?: string) {
        return new User(new Name(name), new Email(email), new Password(hashedPassword), new UniqueEntityId(id));
    }

    // validadePassword (password: string) {
    //     return this.password.isValid(password);
    // }
}
