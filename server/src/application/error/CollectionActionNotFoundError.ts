import { HttpError } from "./HttpError";

export class CollectionActionNotFoundError extends HttpError {

    constructor () {
        super("Collection action not found.", 404);
    }
}
