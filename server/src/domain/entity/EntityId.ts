export default class EntityId {

    constructor (readonly value: string) {
        this.value = value;
    }

    static generate (): string {
        return crypto.randomUUID();
    }
}
