import { Entity, EntityId, Name, Email, Password } from "../../entity";

export class User implements Entity {

    private constructor (
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password: string
    ) {}

    static create (props: Omit<UserProps, "id">): User {
        const { name, email, password } = props;
        const userId = EntityId.generate();
        return new User(userId, Name.create(name).value, Email.create(email).value, Password.create(password).value);
    }

    static restore (props: UserProps): User {
        const { id, name, email, password } = props;
        return new User(id, Name.restore(name).value, Email.restore(email).value, Password.restore(password).value);
    }
    
    validadePassword (password: string): boolean {
        console.log("password: ", password);
        console.log("this.password: ", this.password);
        return Password.restore(this.password).isValid(password);
    }
}

export type UserProps = {
    id: string,
    name: string,
    email: string,
    password: string
};
