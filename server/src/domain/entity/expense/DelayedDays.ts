export default class DelayedDays {
    readonly value: number;

    constructor (value: Date) {
        this.value = this.calculateDelayedDays(new Date(), value);
    }

    private calculateDelayedDays (todayDate: Date, dueDate: Date) {
        const diff = todayDate.getTime() - dueDate.getTime();
        const dayInMillisecond = (1000 * 60 * 60 * 24);
        const days = Math.floor(diff / dayInMillisecond);
        return days;
    }
}
