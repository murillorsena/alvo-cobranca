export default interface StoreRepository {
    findAll (): Promise<Output[]>;
    findById (id: string): Promise<Output | undefined>;
    findByCode (code: string): Promise<Output | undefined>;
}

type Output = {
    id: string,
    code: string,
    name: string
};
