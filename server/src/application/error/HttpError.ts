export default abstract class HttpError extends Error {

    constructor (
        readonly message: string, 
        readonly statusCode: number
    ) {
        super(message);
    }
}
