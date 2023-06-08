import HttpError from "./HttpError";

export default class InvalidParamError extends HttpError {

    constructor (param: string) {
        super(`Invalid param: ${param}`, 400);
    }
}
