export class AuthenticationFailureError extends Error {
    readonly statusCode: number;

    constructor () {
        super("Authentication failure");
        this.statusCode = 400;
    }
}
