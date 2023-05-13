
import UniqueEntityId from "../UniqueEntityId";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password copy 2";

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
    
    static buildExistingUser (name: string, email: string, password: string, id?: string) {
        return new User(new Name(name), new Email(email), new Password(password, true), new UniqueEntityId(id));
    }
}
