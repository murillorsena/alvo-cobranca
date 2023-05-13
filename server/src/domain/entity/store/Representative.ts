import UniqueEntityId from "../UniqueEntityId";

export default class Representative {
    readonly id: UniqueEntityId;

    constructor (
        readonly name: string,
        readonly email: string,
        readonly phone: string,
        readonly address: string,
        readonly storeId: string,
        id?: string
    ) {
        this.id = new UniqueEntityId(id);
    }
}
