import User from "../../../domain/entity/user/User";
import UserRepository from "../../../application/repository/UserRepository";

export default class UserRepositoryInMemory implements UserRepository {
    public users: User[];

    constructor () {
        this.users = [];
    }
    
    async save (name: string, email: string, password: string): Promise<void> {
        const salt = "";
        const user = User.create(name, email, password, salt);
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
        const user = this.users.find(user => user.email.value === email);
        if (!user) return null;
        return user;
    }

    // async save (name: string, email: string, password: string, salt: string): Promise<void> {
    //     this.users.push(User.create(name, email, password, salt));
    // }
}
