import { User } from "../../domain/entity";
import { Repository } from "../repository";

export interface UserRepository extends Repository {
    save (user: User): Promise<void>;
    findAll (): Promise<User[]>;
    findById (id: string): Promise<User | null>;
    findByName (name: string): Promise<User | null>;
    findByEmail (email: string): Promise<User | null>;
    findByStoreId (storeId: string): Promise<User | null>;
}
