import DomainEvent from "../../events/DomainEvent";
import BaseEntity from "./BaseEntity";
import Contact from "./Contact";

export default class ContactHistory extends BaseEntity {
    private contacts: Contact[];

    constructor () {
        super();
        this.contacts = [];
    }

    addContact (storeId: number, userId: number, message: string, date: Date) {
        const contact = new Contact(storeId, userId, message, date);
        this.contacts.push(contact);
        this.publish(new DomainEvent("addContact", contact));
    }
}
