import { HttpError } from "./HttpError";

export class UnauthorizedError extends HttpError {

    constructor (data: any) {
        super("Unauthorized error. " + data, 401);
    }
}
