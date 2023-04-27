export interface HttpServer {
    on (method: HttpMethod, url: String, callback: Function): void;
    listen (port: number): void;
}

export type HttpMethod = "get" | "post" | "put" | "delete";
