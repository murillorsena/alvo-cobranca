import UserRepository from "../../application/repository/UserRepository";
import Connection from "../database/Connection";

export default class UserRepositoryDatabase implements UserRepository {

    constructor (private connection: Connection) {}
    
    async create (name: string, email: string, password: string): Promise<void> {
        await this.connection.query('INSERT INTO "user" ("name", "email", "password") VALUES ($1, $2, $3)', [ name, email, password ]);
    }
    
    async findAll (): Promise<any> {
        const usersData = await this.connection.query('SELECT * FROM "user"', []);
        return usersData;
    }
    
    async findById (id: string): Promise<any> {
        const [ userData ] = await this.connection.query('SELECT * FROM "user" WHERE "id" = $1', id);
        return userData;
    }
    
    async findByName (name: string): Promise<any> {
        const [ userData ] = await this.connection.query('SELECT * FROM "user" WHERE "name" = $1', name);
        return userData;
    }

    async findByEmail (email: string): Promise<any> {
        const [ userData ] = await this.connection.query('SELECT * FROM "user" WHERE "email" = $1', email);
        return userData;
    }
}
