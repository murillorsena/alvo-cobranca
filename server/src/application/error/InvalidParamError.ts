import { HttpError } from "./HttpError";

export class InvalidParamError extends HttpError {

    constructor (param: string) {
        super(`Invalid param: ${param}`, 400);
    }
}
