import UserRepository from "../../repository/UserRepository";

export default class GetUserByEmail {

    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new Error('Usuário não encontrado');
        return user;
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
