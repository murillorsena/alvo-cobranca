import Representative from "../../domain/entity/store/Representative";

export default interface RepresentativeRepository {
    findAllByStoreId (storeId: string): Promise<Representative[]>;
}
