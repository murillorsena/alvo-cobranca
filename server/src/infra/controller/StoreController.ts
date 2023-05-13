import HttpServer from "../http/HttpServer";
import GetStores from "../../application/usecase/store/GetStores";
import GetStoreById from "../../application/usecase/store/GetStoreById";

export default class StoreController {

    constructor (
        private httpServer: HttpServer,
        private getStores: GetStores,
        private getStoreById: GetStoreById
    ) {
        this.httpServer.on("get", "/stores", async (params: any, body: any) => {
            const output = await this.getStores.execute();
            return output;
        });
        
        this.httpServer.on("get", "/stores/:id", async (params: any, body: any) => {
            const input = {
                storeId: params.id
            };
            const output = await this.getStoreById.execute(input);
            return output;
        });
    }
}
