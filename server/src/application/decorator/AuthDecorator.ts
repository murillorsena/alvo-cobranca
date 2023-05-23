import UseCase from "../usecase/UseCase";
import TokenGenerator from "../../infra/token-generator/TokenGenerator";
import UnauthorizedError from "../error/UnauthorizedError";

export default class AuthDecorator implements UseCase {

    constructor (
        private useCase: UseCase,
        private tokenGenerator: TokenGenerator
    ) {}
    
    async execute (input?: any): Promise<any> {
        if (input && input.token) {
            try {
                const payload = await this.tokenGenerator.verify(input.token);
                return this.useCase.execute(input);
            } catch (error: any) {
                throw new UnauthorizedError("Authentication failure");
            }
        }
        return this.useCase.execute(input);
    }
}
