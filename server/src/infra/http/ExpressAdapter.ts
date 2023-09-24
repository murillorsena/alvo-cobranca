import express, { Express, Request, Response } from "express";
import HttpServer, { HttpMethod } from "./HttpServer";
import AuthMiddleware from "../middleware/AuthMiddleware";
import cors from "cors";

export default class ExpressAdapter implements HttpServer {
    private app: Express;

    constructor () {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(AuthMiddleware.execute);
    }
    
    on (method: HttpMethod, url: string, callback: Function): void {
        this.app[method](url, async function (req: Request, res: Response) {
            try {
                const output = await callback(req.params, req.body);
                res.status(200).json(output);
            } catch (error: any) {
                const statusCode = error.statusCode ?? 500;
                const message = error.message ?? "Internal server error";
                res.status(statusCode).json({
                    message
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
