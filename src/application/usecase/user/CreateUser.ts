import User from "../../../domain/entity/user/User";
import UserRepository from "../../repository/UserRepository";

export default class CreateUser {

    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<Output> {
        const { name, email, password } = input;
        const userExists = await this.userRepository.findByEmail(email);
        if (userExists) throw new Error("Usuário já cadastrado");
        const user = new User(name, email, password);
        await this.userRepository.create(user.id, user.name.value, user.email.value, user.password.value);
        return {
            id: '',
            name: '',
            email: ''
        };
    }
}

type Input = {
    name: string,
    email: string,
    password: string
};

type Output = {
    id: string,
    name: string,
    email: string
};
