import { Repository } from "../repository";

export interface RepositoryFactory {
    create (type: string): Repository;
}
