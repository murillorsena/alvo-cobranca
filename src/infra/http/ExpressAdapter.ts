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
        this.app[method](url, async function (req: Request, res: Response) {
            try {
                const output = await callback(req.params, req.body);
                res.status(200).json(output);
            } catch (error: any) {
                res.status(400).json({
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
