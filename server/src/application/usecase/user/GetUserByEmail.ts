import { UseCase } from "../../usecase";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";
import { UserNotFoundError } from "../../error";

export class GetUserByEmail implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: GetUserByEmailInput): Promise<GetUserByEmailOutput> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new UserNotFoundError();
        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    }
}

export type GetUserByEmailInput = {
    email: string
};

export type GetUserByEmailOutput = {
    id: string,
    name: string,
    email: string
};
