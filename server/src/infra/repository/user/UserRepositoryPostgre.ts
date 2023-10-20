import { User } from "../../../domain/entity";
import { UserRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database/DatabaseConnection";

export class UserRepositoryPostgre implements UserRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (userData: any): User {
        const props = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
        return User.restore(props);
    }

    async save (user: User): Promise<void> {
        const { id, name, email, password } = user;
        const statement = `
            INSERT INTO "user" ("id", "name", "email", "password")
            VALUES ($1, $2, $3, $4);
        `;
        await this.connection.query(statement, [ id, name, email, password ]);
    }
    
    async findAll (): Promise<User[]> {
        const statement = `
            SELECT "id", "name", "email", "password"
            FROM "user";
        `;
        const usersData = await this.connection.query(statement, []);
        const users: User[] = [];
        for (const userData of usersData) {
            const user = this.restore(userData);
            users.push(user);
        }
        return users;
    }
    
    async findById (id: string): Promise<User | null> {
        const statement = `
            SELECT "id", "name", "email", "password"
            FROM "user"
            WHERE "id" = $1;
        `;
        const [ userData ] = await this.connection.query(statement, [ id ]);
        if (!userData) return null;
        const user = this.restore(userData);
        return user;
    }
    
    async findByName (name: string): Promise<User | null> {
        const statement = `
            SELECT "id", "name", "email", "password"
            FROM "user"
            WHERE "name" = $1;
        `;
        const [ userData ] = await this.connection.query(statement, [ name ]);
        if (!userData) return null;
        const user = User.restore(userData);
        return user;
    }

    async findByEmail (email: string): Promise<User | null> {
        const statement = `
            SELECT "id", "name", "email", "password" 
            FROM "user" 
            WHERE "email" = $1;
        `;
        const [ userData ] = await this.connection.query(statement, [ email ]);
        if (!userData) return null;
        const user = this.restore(userData);
        return user;
    }    
}
