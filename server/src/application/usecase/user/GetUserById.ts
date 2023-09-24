import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";
import RepositoryFactory from "../../factory/RepositoryFactory";
import BadRequestError from "../../error/BadRequestError";

export default class GetUserById implements UseCase {
    private userRepository: UserRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findById(input.id);
        if (!user) throw new BadRequestError("User not found");
        return {
            id: user.id.value,
            name: user.name.value,
            email: user.email.value
        };
    }
}

type Input = {
    id: string
};

type Output = {
    id: string,
    name: string,
    email: string
};
