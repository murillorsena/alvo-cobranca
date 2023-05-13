import UniqueEntityId from "../UniqueEntityId";

export default class Store {
    readonly id: UniqueEntityId;

    constructor (
        readonly code: string,
        readonly name: string,
        id?: string
    ) {
        this.id = new UniqueEntityId(id);
    }
}
