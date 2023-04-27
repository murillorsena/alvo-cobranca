import ExpenseRepository from "../../../application/repository/ExpenseRepository";
import Connection from "../../database/Connection";

export default class ExpenseRepositoryDatabase implements ExpenseRepository {

    constructor (private connection: Connection) {}

    async findAll (): Promise<any[]> {
        const expenseData = await this.connection.query('SELECT * FROM "expense";', []);
        return expenseData;
    }
}
