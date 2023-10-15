import { Repository } from "../repository";

export interface RepositoryFactory {
    create (repository: string): Repository;
}
