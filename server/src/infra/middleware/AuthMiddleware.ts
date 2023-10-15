import { Request, Response, NextFunction } from "express";

export class AuthMiddleware {

    static execute (req: Request, res: Response, next: NextFunction) {
        if (req.url === "/login") return next();
        const authorization = req.headers["authorization"];
        if (authorization) {
            const token = authorization.replace("Bearer ", "");
            if (token) {
                req.body.token = token;
                return next();
            }
        }
        return res.status(401).json({
            message: "Authentication failure"
        });
    }
}
