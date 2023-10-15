import { User } from "../../../domain/entity";
import { UseCase } from "../../usecase";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory";
import { BadRequestError } from "../../error";

export class SignUp implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: SignUpInput): Promise<SignUpOutput> {
        const userExists = await this.userRepository.findByEmail(input.email);
        if (userExists) throw new BadRequestError("User already exists");
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
