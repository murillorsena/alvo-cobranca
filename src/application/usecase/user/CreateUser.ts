import User from "../../../domain/entity/user/User";
import UserRepository from "../../repository/UserRepository";
import Hasher from "../../../infra/hasher/Hasher";

export default class CreateUser {

    constructor (
        private userRepository: UserRepository,
        private hasher: Hasher
    ) {}

    async execute (input: Input): Promise<Output> {
        const userExists = await this.userRepository.findByEmail(input.email);
        if (userExists) throw new Error("User already exists");
        const user = new User(input.name, input.email, input.password);
        const hashedPassword = await this.hasher.encrypt(user.password.value);
        await this.userRepository.create(user.id, user.name.value, user.email.value, hashedPassword);
        return {
            id: user.id,
            name: user.name.value,
            email: user.email.value
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
