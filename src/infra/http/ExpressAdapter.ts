import HttpServer from './HttpServer';
import { HttpMethod } from './HttpMethod';
import express, { Express, Request, Response } from 'express';

export default class ExpressAdapter implements HttpServer {
    private app: Express;

    constructor () {
        this.app = express();
        this.app.use(express.json());
    }
    
    on (method: HttpMethod, url: string, callback: Function) {
        this.app[method](url, async function (request: Request, response: Response) {
            try {
                const output = await callback(request.params, request.body);
                response.status(200).json(output);
            } catch (error: any) {
                response.status(400).json({
                    message: error.message
                });
            }
        })
    }
    
    listen (port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    }
}
