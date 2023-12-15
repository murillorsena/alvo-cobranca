import { UseCase } from "../usecase";
import { UnauthorizedError } from "../error";
import { TokenGenerator } from "../../infra/token-generator";

export class AuthDecorator implements UseCase {

    constructor (private useCase: UseCase, private tokenGenerator: TokenGenerator) {}
    
    async execute (input?: any): Promise<any> {
        if (input && input.token) {
            try {
                const payload = await this.tokenGenerator.verify(input.token);
                return this.useCase.execute(input);
            } catch (error: any) {
                throw new UnauthorizedError("error: ", error);
            }
        }
        return this.useCase.execute(input);
    }
}
