import User from "../../domain/entity/user/User";
import Repository from "./Repository";

export default interface UserRepository extends Repository {
    save (id: string, name: string, email: string, password: string): Promise<void>;
    findAll (): Promise<User[]>;
    findById (id: string): Promise<User | null>;
    findByName (name: string): Promise<User | null>;
    findByEmail (email: string): Promise<User | null>;
}
