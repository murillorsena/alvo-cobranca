import { HttpError } from "./HttpError";

export class UnauthorizedError extends HttpError {

    constructor () {
        super("Unauthorized error.", 401);
    }
}
