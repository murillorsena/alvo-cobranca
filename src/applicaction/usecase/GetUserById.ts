import UserRepository from "../repository/UserRepository";

export default class GetUserById {

    constructor (private userRepository: UserRepository) {}

    async execute (id: number): Promise<Output> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new Error('User not found');
        return user;
    }
}

type Output = {
    id: string,
    name: string,
    email: string
};
