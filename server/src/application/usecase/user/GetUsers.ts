import UseCase from "../UseCase";
import UserRepository from "../../repository/UserRepository";

export default class GetUsers implements UseCase {

    constructor (private userRepository: UserRepository) {}

    async execute(): Promise<Output[]> {
        const users = await this.userRepository.findAll();
        const output: Output[] = [];
        for (const user of users) {
            output.push({
                id: user.id.value,
                name: user.name.value,
                email: user.email.value
            });
        }
        return output;
    }
}

type Output = {
    id: string,
    name: string,
    email: string
};
