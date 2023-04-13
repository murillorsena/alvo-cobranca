import UserRepository from "../../repository/UserRepository";

export default class GetUserById {

    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.findById(input.id);
        if (!user) throw new Error('Usuário não encontrado');
        return user;
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
