import UserRepository from "../../repository/UserRepository";

export default class GetUsers {

    constructor (private userRepository: UserRepository) {}

    async execute(): Promise<Output[]> {
        const user = await this.userRepository.findAll();
        return user;
    }
}

type Output = {
    id: string,
    name: string,
    email: string
};
