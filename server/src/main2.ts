import { PgPromiseAdapter } from "./infra/database";
import { RepositoryFactoryDatabase } from "./infra/factory";
import { config } from "./config";
// import { NotificationRepository } from "./application/repository";
// import { NotificationRepositoryPostgre, StoreRepositoryPostgre } from "./infra/repository";
import { GetDebitsByStore } from "./application/usecase/debit/GetDebitsByStore";

const connection = new PgPromiseAdapter(config.database.url);
connection.connect();

const repositoryFactory = new RepositoryFactoryDatabase(connection);
// const notificationRepository = new NotificationRepositoryPostgre(connection);
// const storeRepository = new StoreRepositoryPostgre(connection);

// async function getNotifications () {
//     const notifications = await notificationRepository.findAll();
//     console.log(notifications);
// }

// getNotifications();

// async function getNotificationsByStoreId () {
//     const storeId = 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38';
//     const notifications = await notificationRepository.findAllByStoreId(storeId);
//     console.log(notifications);
// }

// getNotifications();
// getNotificationsByStoreId();

// async function getStores () {
//     const stores = await storeRepository.findAll();
//     console.log(stores);
// }

// getStores();

async function getDebitsByStore () {
    const getDebitsByStore = new GetDebitsByStore(repositoryFactory);
    const debits = await getDebitsByStore.execute();
    console.log(debits[0]);
}

getDebitsByStore();
