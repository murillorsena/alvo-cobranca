import { Repository } from "../../application/repository";
import { RepositoryFactory } from "../../application/factory";
import { UserRepositoryPostgre, StoreRepositoryPostgre, RepresentativeRepositoryPostgre, ShoppingRepositoryPostgre, ExpenseRepositoryPostgre, NotificationRepositoryPostgre } from "../repository";
import { RepositoryNotFoundError } from "../../application/error";
import { DatabaseConnection } from "../database";

export class RepositoryFactoryDatabase implements RepositoryFactory {

    constructor (private connection: DatabaseConnection) {}

    create (type: string): Repository {
        if (type === "UserRepository") return new UserRepositoryPostgre(this.connection);
        if (type === "StoreRepository") return new StoreRepositoryPostgre(this.connection);
        if (type === "RepresentativeRepository") return new RepresentativeRepositoryPostgre(this.connection);
        if (type === "ShoppingRepository") return new ShoppingRepositoryPostgre(this.connection);
        if (type === "ExpenseRepository") return new ExpenseRepositoryPostgre(this.connection);
        if (type === "NotificationRepository") return new NotificationRepositoryPostgre(this.connection);
        throw new RepositoryNotFoundError();
    }
}
