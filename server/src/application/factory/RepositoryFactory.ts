import Repository from "../repository/Repository";

export default interface RepositoryFactory {
    create (repository: string): Repository;
}
