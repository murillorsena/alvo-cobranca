import UserRepository from "../../repository/UserRepository";

export default class GetUserByEmail {

    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new Error("User not found");
        return {
            id: user.id,
            name: user.name,
            email: user.email
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
