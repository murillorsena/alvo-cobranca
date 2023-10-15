import { HttpError } from "./HttpError";

export class ShoppingNotFoundError extends HttpError {

    constructor () {
        super("Shopping not found.", 404);
    }
}
