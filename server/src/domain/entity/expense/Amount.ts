export default class Amount {
    readonly value: string;

    constructor (value: number) {
        this.value = this.toString(value);
    }

    private toString (value: number) {
        return value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2
        });
    }
}
