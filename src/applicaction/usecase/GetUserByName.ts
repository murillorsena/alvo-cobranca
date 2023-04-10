import UserRepository from "../repository/UserRepository";

export default class GetUserByName {

    constructor (private userRepository: UserRepository) {}

    async execute (name: string): Promise<Output> {
        const user = await this.userRepository.findByName(name);
        if (!user) throw new Error('User not found');
        return user;
    }
}

type Output = {
    id: string,
    name: string,
    email: string
};
