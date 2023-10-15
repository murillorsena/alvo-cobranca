import { UseCase } from "../../usecase";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";
import { UserNotFoundError } from "../../error";

export class GetUserById implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: GetUserByIdInput): Promise<GetUserByIdOutput> {
        const user = await this.userRepository.findById(input.id);
        if (!user) throw new UserNotFoundError();
        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    }
}

export type GetUserByIdInput = {
    id: string
};

export type GetUserByIdOutput = {
    id: string,
    name: string,
    email: string
};
