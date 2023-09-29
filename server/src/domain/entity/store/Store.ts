import Entity from "../Entity";
import crypto from "crypto";

export default class Store implements Entity {

    private constructor (
        readonly id: string,
        readonly code: string,
        readonly name: string,
    ) {}

    static create (props: Omit<StoreProps, "id">): Store {
        const { code, name } = props;
        const storeId = crypto.randomUUID();
        return new Store(storeId, code, name);
    }

    static restore (props: StoreProps): Store {
        const { id, code, name } = props;
        return new Store(id, code, name);
    }
}

type StoreProps = {
    id: string,
    code: string,
    name: string
};
