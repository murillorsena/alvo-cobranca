export default interface RepresentativeRepository {
    findAllByStoreId (storeId: string): Promise<Output[]>;
    findAllByStoreCode (storeCode: string): Promise<Output[]>;
}

type Output = {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    storeId: string
};
