export default interface UserRepository {
    create (id: string, name: string, email: string, password: string): Promise<void>;
    findAll (): Promise<Output[]>;
    findById (id: string): Promise<Output>;
    findByName (name: string): Promise<Output>;
    findByEmail (email: string): Promise<Output>;
}

type Output = {
    id: string,
    name: string,
    email: string
};
