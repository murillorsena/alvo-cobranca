import { UseCase } from "../../usecase";
import { UserNotFoundError, AuthenticationFailureError } from "../../error";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";
import { TokenGenerator } from "../../../infra/token-generator";

export class Login implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory, private tokenGenerator: TokenGenerator) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: LoginInput): Promise<LoginOutput> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new UserNotFoundError();
        const isValidPassword = user.validadePassword(input.password);
        if (!isValidPassword) throw new AuthenticationFailureError();
        const token = await this.tokenGenerator.generate(user.email);
        return {
            id: user.id,
            name: user.name,
            token
        };
    }
}

export type LoginInput = {
    email: string,
    password: string
};

export type LoginOutput = {
    id: string,
    name: string,
    token: string
};
