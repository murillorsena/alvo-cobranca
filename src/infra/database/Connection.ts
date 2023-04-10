export default interface Connection {
    query (statement: any, params: any): Promise<any>;
    close (): Promise<void>;
}
