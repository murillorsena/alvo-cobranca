import { Repository } from "../../application/repository";
import { RepositoryFactory } from "../../application/factory";
import { UserRepositoryPostgre, StoreRepositoryPostgre, RepresentativeRepositoryPostgre, ShoppingRepositoryPostgre, ExpenseRepositoryPostgre, NotificationRepositoryPostgre } from "../repository";
import { RepositoryNotFoundError } from "../../application/error";
import { DatabaseConnection } from "../database";

export class RepositoryFactoryDatabase implements RepositoryFactory {

    constructor (private connection: DatabaseConnection) {}

    create (repository: string): Repository {
        if (repository === "UserRepository") return new UserRepositoryPostgre(this.connection);
        if (repository === "StoreRepository") return new StoreRepositoryPostgre(this.connection);
        if (repository === "RepresentativeRepository") return new RepresentativeRepositoryPostgre(this.connection);
        if (repository === "ShoppingRepository") return new ShoppingRepositoryPostgre(this.connection);
        if (repository === "ExpenseRepository") return new ExpenseRepositoryPostgre(this.connection);
        if (repository === "NotificationRepository") return new NotificationRepositoryPostgre(this.connection);
        throw new RepositoryNotFoundError();
    }
}
