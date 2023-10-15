import { UseCase } from "../../usecase";
import { UserRepository } from "../../repository";
import { RepositoryFactory } from "../../factory/RepositoryFactory";

export class GetUsers implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (): Promise<GetUsersOutput[]> {
        const users = await this.userRepository.findAll();
        const output: GetUsersOutput[] = [];
        for (const user of users) {
            output.push({
                id: user.id,
                name: user.name,
                email: user.email
            });
        }
        return output;
    }
}

export type GetUsersOutput = {
    id: string,
    name: string,
    email: string
};
