import { Entity, EntityId, Name, Email, BcryptPassword } from "../../entity";

export class User implements Entity {

    private constructor (
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password: string
    ) {}

    static create (props: Omit<UserProps, "id">): User {
        const id = EntityId.generate();
        const name = Name.create(props.name).value;
        const email = Email.create(props.email).value;
        const password = BcryptPassword.create(props.password).value;
        return new User(id, name, email, password);
    }

    static restore (props: UserProps): User {
        const id = props.id;
        const name = props.name;
        const email = props.email;
        const password = props.password;
        return new User(id, name, email, password);
    }

    validadePassword (password: string): boolean {
        return BcryptPassword.restore(this.password).validate(password);
    }
}

export type UserProps = {
    id: string,
    name: string,
    email: string,
    password: string
};
