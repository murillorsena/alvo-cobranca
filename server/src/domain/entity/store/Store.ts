import { Entity, EntityId } from "../index";

export class Store implements Entity {

    private constructor (
        readonly id: string,
        readonly code: string,
        readonly name: string
    ) {}

    static create (props: Omit<StoreProps, "id">): Store {
        const { code, name } = props;
        const storeId = EntityId.generate();
        return new Store(storeId, code, name);
    }

    static restore (props: StoreProps): Store {
        const { id, code, name } = props;
        return new Store(id, code, name);
    }
}

export type StoreProps = {
    id: string,
    code: string,
    name: string
};
