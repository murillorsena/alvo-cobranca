import ExpenseService from "./ExpenseService";
import HttpClient from "../infra/HttpClient";

export default class ExpenseServiceHttp implements ExpenseService {

    constructor (
        private httpClient: HttpClient, 
        private baseUrl: string
    ) {}
    
    async getExpenses(): Promise<any> {
        const expenses = await this.httpClient.get(`${this.baseUrl}/`);
        return expenses;
    }
}
