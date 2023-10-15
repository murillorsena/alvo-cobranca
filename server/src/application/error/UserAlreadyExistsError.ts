export class UserAlreadyExistsError extends Error {
    readonly statusCode: number;

    constructor () {
        super("User already exists");
        this.statusCode = 400;
    }
}
