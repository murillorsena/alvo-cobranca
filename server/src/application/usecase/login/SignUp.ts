import User from "../../../domain/entity/user/User";
import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";
import RepositoryFactory from "../../factory/RepositoryFactory";
import BadRequestError from "../../error/BadRequestError";

export default class SignUp implements UseCase {
    private userRepository: UserRepository;

    constructor (
        repositoryFactory: RepositoryFactory,
        private salt: string
    ) {
        this.userRepository = repositoryFactory.create("UserRepository") as UserRepository;
    }

    async execute (input: Input): Promise<Output> {
        const userExists = await this.userRepository.findByEmail(input.email);
        if (userExists) throw new BadRequestError("User already exists");
        const user = User.create(input.name, input.email, input.password, this.salt);
        await this.userRepository.save(
            user.id.value, 
            user.name.value, 
            user.email.value, 
            user.password.value
        );
        return {
            name: user.name.value,
        };
    }
}

type Input = {
    name: string,
    email: string,
    password: string
};

type Output = {
    name: string
};
