import { HttpError } from "./HttpError";

export class UserNotFoundError extends HttpError {

    constructor () {
        super("User not found.", 404);
    }
}
