import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";
import RepositoryFactory from "../../factory/RepositoryFactory";
import BadRequestError from "../../error/BadRequestError";

export default class GetUserByName implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findByName(input.name);
        if (!user) throw new BadRequestError("User not found");
        return {
            id: user.id.value,
            name: user.name.value,
            email: user.email.value
        };
    }
}

type Input = {
    name: string
};

type Output = {
    id: string,
    name: string,
    email: string
};
