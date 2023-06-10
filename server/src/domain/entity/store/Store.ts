import EntityId from "../EntityId";

export default class Store {
    readonly id: EntityId;

    constructor (
        readonly code: string,
        readonly name: string,
        id?: string
    ) {
        this.id = new EntityId(id);
    }
}
