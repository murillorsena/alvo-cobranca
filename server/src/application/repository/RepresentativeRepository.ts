import Representative from "../../domain/entity/store/Representative";
import Repository from "./Repository";

export default interface RepresentativeRepository extends Repository {
    findAllByStoreId (storeId: string): Promise<Representative[]>;
}
