import { User } from "../../../domain/entity";
import { UserRepository } from "../../../application/repository";

export class UserRepositoryInMemory implements UserRepository {
    private users: User[];

    constructor () {
        this.users = [];
    }

    async save (user: User): Promise<void> {
        this.users.push(user);
    }

    async findAll (): Promise<User[]> {
        const users = this.users;
        return users;
    }
    
    async findById (id: string): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        if (!user) return null;
        return user;
    }
    
    async findByName (name: string): Promise<User | null> {
        const user = this.users.find(user => user.name === name);
        if (!user) return null;
        return user;
    }
    
    async findByEmail (email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        if (!user) return null;
        return user;
    }
}
