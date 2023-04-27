import UserRepository from "../../../application/repository/UserRepository";
import crypto from "crypto";

export default class UserRepositoryInMemory implements UserRepository {
    users: any[];

    constructor () {
        this.users = [];
    }

    async create (name: string, email: string, password: string): Promise<void> {
        const id = crypto.randomUUID();
        this.users.push({ id, name, email, password });
    }

    async findAll (): Promise<any> {
        return this.users;
    }

    async findById (id: string): Promise<any> {
        return this.users.find(value => value.id === id);
    }

    async findByName (name: string): Promise<any> {
        return this.users.find(value => value.name === name);
    }

    async findByEmail (email: string): Promise<any> {
        return this.users.find(value => value.email === email);
    }
}
