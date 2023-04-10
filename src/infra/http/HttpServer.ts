import { HttpMethod } from './HttpMethod';

export default interface HttpServer {
    on (method: HttpMethod, url: String, callback: Function): void;
    listen (port: number): void;
}
