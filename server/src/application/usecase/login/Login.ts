import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";
import Hasher from "../../../infra/hasher/Hasher";
import TokenGenerator from "../../../infra/token-generator/TokenGenerator";
import BadRequestError from "../../error/BadRequestError";

export default class Login implements UseCase {

    constructor (
        private userRepository: UserRepository,
        // private hasher: Hasher,
        // private tokenGenerator: TokenGenerator
    ) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new BadRequestError("Authentication failure");
        // const isValidPassword = await this.hasher.decrypt(input.password, user.password.value);
        // if (!isValidPassword) throw new Error("Authentication failure");
        return {
            name: user.name.value
        };
    }
}

type Input = {
    email: string,
    password: string
};

type Output = {
    name: string
};
