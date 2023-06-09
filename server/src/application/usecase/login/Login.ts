import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";
import TokenGenerator from "../../../infra/token-generator/TokenGenerator";
import BadRequestError from "../../error/BadRequestError";

export default class Login implements UseCase {

    constructor (
        private userRepository: UserRepository,
        private tokenGenerator: TokenGenerator,
        private salt: string
    ) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new BadRequestError("Authentication failure");
        const isValidPassword = user.validadePassword(input.password, this.salt);
        if (!isValidPassword) throw new BadRequestError("Authentication failure");
        const token = await this.tokenGenerator.generate(user.email.value);
        return {
            name: user.name.value,
            token
        };
    }
}

type Input = {
    email: string,
    password: string
};

type Output = {
    name: string,
    token: string
};
