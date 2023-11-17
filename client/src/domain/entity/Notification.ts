export class Notification {

    constructor (
        readonly id: string,
        public type: string,
        public content: string,
        readonly userId: string,
        readonly storeId: string,
        readonly shoppingId: string,
        readonly createdAt?: Date | null,
        public updatedAt?: Date | null
    ) {}
}

export type NotificationProps = {
    id: string,
    type: string,
    content: string,
    userId: string,
    storeId: string,
    shoppingId: string,
    createdAt?: Date | null,
    updatedAt?: Date | null
};
