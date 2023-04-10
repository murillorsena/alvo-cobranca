import UserRepository from "../repository/UserRepository";

export default class GetUserByEmail {

    constructor (private userRepository: UserRepository) {}

    async execute (email: string): Promise<Output> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) throw new Error('User not found');
        return user;
    }
}

type Output = {
    id: string,
    name: string,
    email: string
};
