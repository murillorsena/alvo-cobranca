import { Entity, EntityId } from "../../entity";

export class Store implements Entity {

    private constructor (
        readonly id: string,
        readonly code: string,
        readonly name: string,
        readonly email: string,
        readonly phone: string
    ) {}

    static create (props: Omit<StoreProps, "id">): Store {
        const { code, name, email, phone } = props;
        const storeId = EntityId.generate();
        return new Store(storeId, code, name, email, phone);
    }

    static restore (props: StoreProps): Store {
        const { id, code, name, email, phone } = props;
        return new Store(id, code, name, email, phone);
    }
}

export type StoreProps = {
    id: string,
    code: string,
    name: string,
    email: string,
    phone: string
};
