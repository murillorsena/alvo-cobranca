import { UseCase } from "../../usecase";
import { AuthenticationFailureError } from "../../error";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";
import { TokenGenerator } from "../../../infra/token-generator";

export class Login implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory, private tokenGenerator: TokenGenerator) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: LoginInput): Promise<LoginOutput> {
        console.log("login -> input: ", input);
        const user = await this.userRepository.findByEmail(input.email);
        console.log("login -> user: ", user);
        if (!user) throw new AuthenticationFailureError("user: " + user);
        const isValidPassword = user.validadePassword(input.password);
        console.log("login -> isValidPassword: ", isValidPassword);
        if (!isValidPassword) throw new AuthenticationFailureError("isValidPasssword: " + isValidPassword);
        const token = await this.tokenGenerator.generate(user.email);
        const output: LoginOutput = {
            userId: user.id,
            userName: user.name,
            token
        };
        return output;
    }
}

export type LoginInput = {
    email: string,
    password: string
};

export type LoginOutput = {
    userId: string,
    userName: string,
    token: string
};
