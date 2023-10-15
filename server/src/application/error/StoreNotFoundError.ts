import { HttpError } from "./HttpError";

export class StoreNotFoundError extends HttpError {

    constructor () {
        super("Store not found.", 404);
    }
}
