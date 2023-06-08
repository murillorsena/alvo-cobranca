import UseCase from "../UseCase";
import User from "../../../domain/entity/user/User";
import UserRepository from "../../repository/UserRepository";

export default class SignUp implements UseCase {

    constructor (
        private userRepository: UserRepository,
        private salt: string
    ) {}

    async execute (input: Input): Promise<Output> {
        const userExists = await this.userRepository.findByEmail(input.email);
        if (userExists) throw new Error("User already exists");
        const user = User.create(input.name, input.email, input.password, this.salt);
        await this.userRepository.create(user.id.value, user.name.value, user.email.value, user.password.value);
        return {
            name: user.name.value,
        };
    }
}

type Input = {
    name: string,
    email: string,
    password: string
};

type Output = {
    name: string
};
