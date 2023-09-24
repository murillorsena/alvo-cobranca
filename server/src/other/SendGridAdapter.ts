import { MailService } from "@sendgrid/mail";
import EmailEngine from "./EmailEngine";
import "dotenv/config";

export default class SendGridAdapter implements EmailEngine {
    private mailService: MailService;

    constructor () {
        this.mailService = new MailService();
        this.mailService.setApiKey(String(process.env.SE));
    }

    async send (message: EmailMessage): Promise<void> {
        // await this.mailService.send(message);
    }
}

type EmailMessage = {
    to: string, 
    from: string, 
    subject?: string, 
    text?: string,
    html?: string
}
