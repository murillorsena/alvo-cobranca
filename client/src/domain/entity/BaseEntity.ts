import DomainEvent from "../../events/DomainEvent";

export default abstract class BaseEntity {
    private events: Event[];

    constructor () {
        this.events = [];
    }

    on (name: string, callback: Function) {
        const event = { name, callback };
        this.events.push(event);
    }

    publish (domainEvent: DomainEvent) {
        for (const event of this.events) {
            if (event.name === domainEvent.name) {
                event.callback(domainEvent);
            }
        }
    }
}

type Event = {
    name: string;
    callback: Function;
};
