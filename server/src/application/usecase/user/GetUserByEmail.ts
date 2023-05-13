import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";
import BadRequestError from "../../error/BadRequestError";

export default class GetUserByEmail implements UseCase {

    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new BadRequestError("User not found");
        return {
            id: user.id.value,
            name: user.name.value,
            email: user.email.value
        };
    }
}

type Input = {
    email: string
};

type Output = {
    id: string,
    name: string,
    email: string
};
