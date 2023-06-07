export default class Contact {

    constructor (
        readonly storeId: number,
        readonly userId: number,
        readonly message: string,
        readonly date: Date
    ) {}
}
