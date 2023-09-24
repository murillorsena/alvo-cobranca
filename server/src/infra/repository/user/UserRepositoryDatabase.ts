import User from "../../../domain/entity/user/User";
import UserRepository from "../../../application/repository/UserRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class UserRepositoryDatabase implements UserRepository {

    constructor (private connection: DatabaseConnection) {}

    async save (id: string, name: string, email: string, password: string): Promise<void> {
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
            const user = User.restore(
                userData.id, 
                userData.name, 
                userData.email, 
                userData.password
            );
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
        const user = User.restore(
            userData.id, 
            userData.name, 
            userData.email, 
            userData.password
        );
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
        const user = User.restore(
            userData.id, 
            userData.name, 
            userData.email, 
            userData.password
        );
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
        const user = User.restore(
            userData.id, 
            userData.name, 
            userData.email, 
            userData.password
        );
        return user;
    }    
}
