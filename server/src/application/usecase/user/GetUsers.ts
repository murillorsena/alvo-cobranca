import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";
import RepositoryFactory from "../../factory/RepositoryFactory";

export default class GetUsers implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute(): Promise<Output[]> {
        const users = await this.userRepository.findAll();
        const output: Output[] = [];
        for (const user of users) {
            output.push({
                id: user.id.value,
                name: user.name.value,
                email: user.email.value
            });
        }
        return output;
    }
}

type Output = {
    id: string,
    name: string,
    email: string
};
