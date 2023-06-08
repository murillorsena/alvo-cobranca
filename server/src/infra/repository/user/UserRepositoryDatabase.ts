import User from "../../../domain/entity/user/User";
import UserRepository from "../../../application/repository/UserRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class UserRepositoryDatabase implements UserRepository {

    constructor (private connection: DatabaseConnection) {}

    async create (id: string, name: string, email: string, password: string): Promise<void> {
        await this.connection.query('INSERT INTO "user" ("id", "name", "email", "password") VALUES ($1, $2, $3, $4);', [ id, name, email, password ]);
    }
    
    async findAll (): Promise<User[]> {
        const usersData = await this.connection.query('SELECT * FROM "user";', []);
        const users: User[] = [];
        for (const userData of usersData) {
            users.push(User.restore(userData.name, userData.email, userData.password, userData.id));
        }
        return users;
    }
    
    async findById (id: string): Promise<User | null> {
        const [ userData ] = await this.connection.query('SELECT * FROM "user" WHERE "id" = $1;', [ id ]);
        if (!userData) return null;
        const user = User.restore(userData.name, userData.email, userData.password, userData.id);
        return user;
    }
    
    async findByName (name: string): Promise<User | null> {
        const [ userData ] = await this.connection.query('SELECT * FROM "user" WHERE "name" = $1;', [ name ]);
        if (!userData) return null;
        const user = User.restore(userData.name, userData.email, userData.password, userData.id);
        return user;
    }

    async findByEmail (email: string): Promise<User | null> {
        const [ userData ] = await this.connection.query('SELECT * FROM "user" WHERE "email" = $1;', [ email ]);
        if (!userData) return null;
        const user = User.restore(userData.name, userData.email, userData.password, userData.id);
        return user;
    }    
}
