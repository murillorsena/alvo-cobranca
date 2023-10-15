import { HttpError } from "./HttpError";

export class NotificationNotFoundError extends HttpError {

    constructor () {
        super("Notification not found.", 404);
    }
}
