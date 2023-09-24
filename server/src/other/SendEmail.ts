import Email from "./domain/entity/user/Email";
import UseCase from "./application/usecase/UseCase";
import EmailEngine from "./EmailEngine";

export default class SendEmail implements UseCase {

    constructor (readonly emailEngine: EmailEngine) {}

    async execute (input: Input): Promise<any> {
        const to = new Email(input.to).value;
        const from = new Email(input.from).value;
        await this.emailEngine.send(to, from);
    }
}

type Input = {
    to: string, 
    from: string, 
    subject?: string, 
    body?: string
};
