import express from "express";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import GetStores from "./application/usecase/store/GetStores";
import GetStoreByCode from "./application/usecase/store/GetStoreByCode";
import StoreRepositoryDatabase from "./infra/repository/store/StoreRepositoryDatabase";
import RepresentativeRepositoryDatabase from "./infra/repository/store/RepresentativeRepositoryDatabase";
import GetExpenses from "./application/usecase/expense/GetExpenses";
import ExpenseRepositoryDatabase from "./infra/repository/expense/ExpenseRepositoryDatabase";
import GetStoreById from "./application/usecase/store/GetStoreById";

const app = express();

const connection = new PgPromiseAdapter("postgresql://postgres:ADMIN@localhost:5432/alvo_cobranca");
const storeRepository = new StoreRepositoryDatabase(connection);
const representativeRepository = new RepresentativeRepositoryDatabase(connection);
const expenseRepository = new ExpenseRepositoryDatabase(connection);

app.get("/stores", async function (req, res) {
    const getStores = new GetStores(storeRepository);
    const output = await getStores.execute();
    res.json(output);
});

app.get("/stores/:id", async function (req, res) {
    const getStoreById = new GetStoreById(storeRepository, representativeRepository);
    const output = await getStoreById.execute({
        id: req.params.id
    });
    res.json(output);
});

// app.get("/stores/:code", async function (req, res) {
//     const getStoreByCode = new GetStoreByCode(storeRepository, representativeRepository);
//     const output = await getStoreByCode.execute({
//         code: req.params.code
//     });
//     res.json(output);
// });

app.get("/expenses", async function (req, res) {
    const getExpenses = new GetExpenses(expenseRepository);
    const output = await getExpenses.execute();
    res.json(output);
});

app.listen(3001, () => {
    console.log("Server is running");
});
