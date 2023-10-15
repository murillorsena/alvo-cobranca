import { UseCase } from "../../usecase";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";
import { UserNotFoundError } from "../../error";

export class GetUserByName implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: GetUserByNameInput): Promise<GetUserByNameOutput> {
        const user = await this.userRepository.findByName(input.name);
        if (!user) throw new UserNotFoundError();
        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    }
}

export type GetUserByNameInput = {
    name: string
};

export type GetUserByNameOutput = {
    id: string,
    name: string,
    email: string
};
