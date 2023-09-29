import Entity from "../Entity";
import crypto from "crypto";

export default class Representative implements Entity {

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
        const representativeId = crypto.randomUUID();
        return new Representative(representativeId, name, email, phone, address, storeId);
    }

    static restore (props: RepresentativeProps): Representative {
        const { id, name, email, phone, address, storeId } = props;
        return new Representative(id, name, email, phone, address, storeId);
    }
}

type RepresentativeProps = {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    storeId: string
};
