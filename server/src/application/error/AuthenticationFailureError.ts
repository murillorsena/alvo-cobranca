export class AuthenticationFailureError extends Error {
    readonly statusCode: number;

    constructor (data: any) {
        super("Authentication failure: " + data);
        this.statusCode = 400;
    }
}
