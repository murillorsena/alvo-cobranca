import User from "../../../domain/entity/user/User";
import UserRepository from "../../../application/repository/UserRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class UserRepositoryDatabase implements UserRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (userData: any): User {
        const props = {
            id: userData["id"],
            name: userData["name"],
            email: userData["email"],
            password: userData["password"]
        };
        return User.restore(props);
    }

    async save (user: User): Promise<void> {
        const { id, name, email, password } = user;
        const query = `
            INSERT INTO "user" ("id", "name", "email", "password")
            VALUES (?, ?, ?, ?);
        `;
        await this.connection.query(query, [ id, name, email, password ]);
    }
    
    async findAll (): Promise<User[]> {
        const query = `
            SELECT "id", "name", "email", "password"
            FROM "user";
        `;
        const usersData = await this.connection.query(query, []);
        const users: User[] = [];
        for (const userData of usersData) {
            const user = this.restore(userData);
            users.push(user);
        }
        return users;
    }
    
    async findById (id: string): Promise<User | null> {
        const query = `
            SELECT "id", "name", "email", "password"
            FROM "user"
            WHERE "id" = ?;
        `;
        const [ userData ] = await this.connection.query(query, [ id ]);
        if (!userData) return null;
        const user = this.restore(userData);
        return user;
    }
    
    async findByName (name: string): Promise<User | null> {
        const query = `
            SELECT "id", "name", "email", "password"
            FROM "user"
            WHERE "name" = ?;
        `;
        const [ userData ] = await this.connection.query(query, [ name ]);
        if (!userData) return null;
        const user = User.restore(userData);
        return user;
    }

    async findByEmail (email: string): Promise<User | null> {
        const query = `
            SELECT "id", "name", "email", "password" 
            FROM "user" 
            WHERE "email" = ?;
        `;
        const [ userData ] = await this.connection.query(query, [ email ]);
        if (!userData) return null;
        const user = this.restore(userData);
        return user;
    }    
}
