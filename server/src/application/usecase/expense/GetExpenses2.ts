import UseCase from "../UseCase";
import ExpenseRepository from "../../repository/ExpenseRepository";

export default class GetExpenses implements UseCase {

    constructor (private expenseRepository: ExpenseRepository) {}

    async execute (input: Input): Promise<any[]> {
        const output = [
            {
                codigo: "10001",
                lojista: "LOJA01",
                shopping: "BSWA",
                especialista: "Bob",
                montante: "1000",
                maiorAtraso: "10",
            },
            {
                codigo: "10002",
                lojista: "LOJA02",
                shopping: "BSAB",
                especialista: "Bob",
                montante: "2000",
                maiorAtraso: "5",
            },
            {
                codigo: "10003",
                lojista: "LOJA03",
                shopping: "BSCA",
                especialista: "Bob",
                montante: "1800",
                maiorAtraso: "20",
            },
            {
                codigo: "10004",
                lojista: "LOJA04",
                shopping: "BSIP",
                especialista: "Bob",
                montante: "700",
                maiorAtraso: "25",
            },
            {
                codigo: "10005",
                lojista: "LOJA05",
                shopping: "BSCT",
                especialista: "Bob",
                montante: "7500",
                maiorAtraso: "60",
                representatives: [
                    {
                        name: "murillo",
                        address: "abc, 123"
                    }
                ]
            },
            {
                codigo: "10006",
                lojista: "LOJA06",
                shopping: "BSSL",
                especialista: "Bob",
                montante: "5500",
                maiorAtraso: "35",
            },
            {
                codigo: "10007",
                lojista: "LOJA07",
                shopping: "BSNH",
                especialista: "John Doe",
                montante: "1100",
                maiorAtraso: "5",
            },
            {
                codigo: "10008",
                lojista: "LOJA08",
                shopping: "BSSP",
                especialista: "John Doe",
                montante: "2600",
                maiorAtraso: "50",
            },
            {
                codigo: "10009",
                lojista: "LOJA09",
                shopping: "PACL",
                especialista: "John Doe",
                montante: "900",
                maiorAtraso: "10",
            },
            {
                codigo: "10010",
                lojista: "LOJA10",
                shopping: "MOSH",
                especialista: "John Doe",
                montante: "1300",
                maiorAtraso: "25",
            },
            {
                codigo: "10011",
                lojista: "LOJA11",
                shopping: "BSPL",
                especialista: "John Doe",
                montante: "5000",
                maiorAtraso: "40",
            },
            {
                codigo: "10012",
                lojista: "LOJA12",
                shopping: "BSTS",
                especialista: "John Doe",
                montante: "500",
                maiorAtraso: "5",
            }
        ];
        return output;
    }
}

type Input = {
    token: string
};
