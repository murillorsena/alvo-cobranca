import { DomainEvent } from "../../events";

export abstract class Entity {
    readonly id: string;
    private events: Event[];

    constructor () {
        this.events = [];
    }

    on (name: string, callback: Function): void {
        const event = { name, callback };
        this.events.push(event);
    }

    publish (domainEvent: DomainEvent): void {
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
