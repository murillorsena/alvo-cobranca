export class RepositoryNotFoundError extends Error {
    readonly statusCode: number;

    constructor () {
        super("Repository not found.");
        this.statusCode = 404;
    }
}
