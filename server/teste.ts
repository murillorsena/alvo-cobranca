// import { SignUp } from "./src/application/usecase";
// import { config } from "./src/config";
// import { PgPromiseAdapter } from "./src/infra/database";
// import { RepositoryFactoryDatabase } from "./src/infra/factory";

// const connection = new PgPromiseAdapter(config.database.url);
// connection.connect();

// const repositoryFactory = new RepositoryFactoryDatabase(connection);

// const signUp = new SignUp(repositoryFactory);

// (async () => {
//     const input = {
//         name: "Murillo",
//         email: "murillo@mail.com",
//         password: "Murill@1998"
//     };
//     const output = await signUp.execute(input);
//     console.log("signUp: ", output);
// })();

// // user:  User {
// //     id: '4ab1088d-33b6-46fd-8e88-f0924de23c00',
// //     name: 'Murillo',
// //     email: 'murillo@mail.com',
// //     password: '$2b$10$3ViNimPsLW52u1E96YQfLe1qc.L7pwmmkwAoLNPPnK3e30K51xeka'
// // }

