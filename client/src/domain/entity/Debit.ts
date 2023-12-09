export class Debit {

    constructor (
        readonly id: string,
        readonly description: string,
        readonly amount: number,
        readonly dueDate: Date,
        readonly compensationDate: Date | null,
        readonly delayedDays: number,
        readonly status: string
    ) {}
}
