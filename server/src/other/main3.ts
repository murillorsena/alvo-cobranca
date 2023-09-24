import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import ExpenseRepositoryDatabase from "./infra/repository/expense/ExpenseRepositoryDatabase";
import StoreRepositoryDatabase from "./infra/repository/store/StoreRepositoryDatabase";
import GetExpensesByStore from "./application/usecase/expense/GetExpensesByStore";
import "dotenv/config";

const connectionUrl = process.env.DB_URL;
const connection = new PgPromiseAdapter(connectionUrl);
connection.connect();

const expenseRepository = new ExpenseRepositoryDatabase(connection);
const storeRepository = new StoreRepositoryDatabase(connection);
const getExpensesByStore = new GetExpensesByStore(expenseRepository, storeRepository);

// expenseRepository.findStoresByStoreId().then(response => {
//     console.log(response);
// });

const expenses = async () => await getExpensesByStore.execute();

expenses().then((expense) => console.log(expense));

// const data = async () => {
//     // const sum = await expenseRepository.sum("b3edf713-bffe-4f4a-97eb-7c71e63e4091");
//     // const min = await expenseRepository.min("b3edf713-bffe-4f4a-97eb-7c71e63e4091");
//     const sum = await expenseRepository.sumAmount("ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38");
//     const min = await expenseRepository.minDueDate("ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38");
//     return {
//         sum,
//         min
//     }
// }

// data().then(result => console.log(result));
