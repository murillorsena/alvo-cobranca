export class Period {

    constructor (readonly startDate: Date, readonly endDate: Date) {}

    getDiffInDays (): number {
        const diff = this.endDate.getTime() - this.startDate.getTime();
        const dayInMilliseconds = (1000 * 60 * 60 * 24);
        const diffInDays = Math.round(diff / dayInMilliseconds);
        return diffInDays;
    }
}
