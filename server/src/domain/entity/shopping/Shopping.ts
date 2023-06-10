import EntityId from "../EntityId";

export default class Shopping {
    readonly id: EntityId;

    constructor (
        readonly code: string,
        readonly name: string, 
        readonly description: string, 
        id?: string
    ) {
        this.id = new EntityId(id);
    }
}
