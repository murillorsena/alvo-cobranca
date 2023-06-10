import EntityId from "../EntityId";

export default class Representative {
    readonly id: EntityId;

    constructor (
        readonly name: string,
        readonly email: string,
        readonly phone: string,
        readonly address: string,
        readonly storeId: string,
        id?: string
    ) {
        this.id = new EntityId(id);
    }
}
