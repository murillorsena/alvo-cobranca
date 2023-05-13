import { format } from "date-fns";

export default class DueDate {
    readonly value: string

    constructor (value: Date) {
        this.value = this.toDateString(value);
    }

    private toDateString (value: Date) {
        return format(value, "dd/MM/yyyy");
    }
}
