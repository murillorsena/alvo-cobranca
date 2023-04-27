import UserRepository from "../../repository/UserRepository";

export default class GetUserByName {

    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findByName(input.name);
        if (!user) throw new Error("User not found");
        return {
            id: user.id,
            name: user.name,
            email: user.email
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
