export default interface EmailEngine {
    send (message: EmailMessage): Promise<void>
}

type EmailMessage = {
    to: string, 
    from: string, 
    subject?: string, 
    text?: string,
    html?: string
}
