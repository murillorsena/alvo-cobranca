import { Entity, EntityId } from "../index";

export class Shopping implements Entity {
    
    private constructor (
        readonly id: string,
        readonly code: string,
        readonly name: string, 
        readonly description: string
    ) {}

    static create (props: Omit<ShoppingProps, "id">): Shopping {
        const { code, name, description } = props;
        const shoppingId = EntityId.generate();
        return new Shopping(shoppingId, code, name, description);
    }

    static restore (props: ShoppingProps): Shopping {
        const { id, code, name, description } = props;
        return new Shopping(id, code, name, description);
    }
}

export type ShoppingProps = {
    id: string,
    code: string,
    name: string,
    description: string
};
