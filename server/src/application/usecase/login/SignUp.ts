import { User } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { UserAlreadyExistsError } from "../../error/UserAlreadyExistsError";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";

export class SignUp implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: SignUpInput): Promise<SignUpOutput> {
        const userExists = await this.userRepository.findByEmail(input.email);
        if (userExists) throw new UserAlreadyExistsError();
        const props = {
            name: input.name,
            email: input.email,
            password: input.password
        };
        const user = User.create(props);
        await this.userRepository.save(user);
        return {
            name: user.name
        };
    }
}

export type SignUpInput = {
    name: string,
    email: string,
    password: string
};

export type SignUpOutput = {
    name: string
};
