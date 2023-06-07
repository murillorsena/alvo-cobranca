import Shopping from "../../../domain/entity/shopping/Shopping";
import ShoppingRepository from "../../../application/repository/ShoppingRepository";
import Connection from "../../database/Connection";

export default class ShoppingRepositoryDatabase implements ShoppingRepository {

    constructor (private connection: Connection) {}

    async findById(id: string): Promise<Shopping | null> {
        const [ shoppingData ] = await this.connection.query('SELECT * FROM "shopping" WHERE "id" = $1;', [ id ]);
        const shopping = new Shopping(shoppingData.code, shoppingData.name, shoppingData.description, shoppingData.id);
        return shopping;
    }
}
