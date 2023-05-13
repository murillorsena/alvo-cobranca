import express, { Express, NextFunction, Request, Response } from "express";
import HttpServer, { HttpMethod } from "./HttpServer";

export default class ExpressAdapter implements HttpServer {
    private app: Express;

    constructor () {
        this.app = express();
        this.app.use(express.json());
        this.app.use(this.auth());
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

    private auth () {
        return function (req: Request, res: Response, next: NextFunction) {
            if (req.url === "/login") return next();
            const authorization = req.headers["authorization"];
            if (authorization) {
                const token = authorization.replace("Bearer ", "");
                return next();
            }
            return res.status(401).json({
                message: "Authentication failure"
            });
        }
    }
}
