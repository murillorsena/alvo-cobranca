import { Entity, EntityId } from "../index";

export class Representative implements Entity {

    private constructor (
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly phone: string,
        readonly address: string,
        readonly storeId: string
    ) {}

    static create (props: Omit<RepresentativeProps, "id">): Representative {
        const { name, email, phone, address, storeId } = props;
        const representativeId = EntityId.generate();
        return new Representative(representativeId, name, email, phone, address, storeId);
    }

    static restore (props: RepresentativeProps): Representative {
        const { id, name, email, phone, address, storeId } = props;
        return new Representative(id, name, email, phone, address, storeId);
    }
}

export type RepresentativeProps = {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    storeId: string
};
