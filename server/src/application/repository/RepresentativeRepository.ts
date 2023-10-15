import { Representative } from "../../domain/entity";
import { Repository } from "../repository";

export interface RepresentativeRepository extends Repository {
    findAllByStoreId (storeId: string): Promise<Representative[]>;
}
