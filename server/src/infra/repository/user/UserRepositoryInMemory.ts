import User from "../../../domain/entity/user/User";
import UserRepository from "../../../application/repository/UserRepository";

export default class UserRepositoryInMemory implements UserRepository {
    users: User[];

    constructor () {
        this.users = [];
    }

    async create (name: string, email: string, password: string, salt: string): Promise<void> {
        this.users.push(await User.create(name, email, password, salt));
    }

    async findAll (): Promise<any> {
        const users = this.users;
        return users;
    }

    async findById (id: string): Promise<any> {
        const user = this.users.find(value => value.id.value === id);
        return user;
    }

    async findByName (name: string): Promise<any> {
        const user = this.users.find(value => value.name.value === name);
        return user;
    }

    async findByEmail (email: string): Promise<any> {
        const user = this.users.find(value => value.email.value === email);
        return user;
    }
}
