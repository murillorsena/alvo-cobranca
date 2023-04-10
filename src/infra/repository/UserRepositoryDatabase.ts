import UserRepository from "../../applicaction/repository/UserRepository";
import Connection from "../database/Connection";

export default class UserRepositoryDatabase implements UserRepository {

    constructor (private connection: Connection) {}
    
    async insert (name: string, email: string, password: string): Promise<void> {
        await this.connection.query('insert into "user" (name, email, password) values ($1, $2, $3)', [ name, email, password ]);
    }
    
    async findAll(): Promise<any> {
        const usersData = await this.connection.query('select * from "user"', []);
        return usersData;
    }
    
    async findById (id: number): Promise<any> {
        const [ userData ] = await this.connection.query('select * from "user" where user_id = $1', id);
        return userData;
    }
    
    async findByName (name: string): Promise<any> {
        const [ userData ] = await this.connection.query('select * from "user" where name = $1', name);
        return userData;
    }

    async findByEmail (email: string): Promise<any> {
        const [ userData ] = await this.connection.query('select * from "user" where email = $1', email);
        return userData;
    }
}
