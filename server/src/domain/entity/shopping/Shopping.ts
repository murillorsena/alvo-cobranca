import UniqueEntityId from "../UniqueEntityId";

export default class Shopping {
    readonly id: UniqueEntityId;

    constructor (
        readonly code: string,
        readonly name: string, 
        readonly description: string, 
        id?: string
    ) {
        this.id = new UniqueEntityId(id);
    }
}
