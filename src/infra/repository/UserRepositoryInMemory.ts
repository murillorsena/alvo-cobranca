import UserRepository from "../../applicaction/repository/UserRepository";
import crypto from 'crypto';

export default class UserRepositoryInMemory implements UserRepository {
    users: any[];

    constructor () {
        this.users = [];
    }

    async insert(name: string, email: string, password: string): Promise<void> {
        const id = crypto.randomUUID();
        this.users.push({ id, name, email, password });
    }

    async findAll(): Promise<any> {
        return this.users;
    }

    async findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async findByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async findByEmail(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
