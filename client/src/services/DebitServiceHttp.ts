import { DebitService } from "../services";
import { HttpClient } from "../infra/http";

export class DebitServiceHttp implements DebitService {

    constructor (
        private httpClient: HttpClient, 
        private baseUrl: string
    ) {}

    async getDebits(): Promise<any> {
        const url = `${this.baseUrl}/`;
        const debitsData = await this.httpClient.get(url);
        const debits: any[] = [];
        for (const debitData of debitsData) {
            const debit = {
                storeId: debitData.store.id,
                storeCode: debitData.store.code,
                storeName: debitData.store.name,
                storeEmail: debitData.store.email,
                storePhone: debitData.store.phone,
                shoppingId: debitData.shopping.id,
                shoppingName: debitData.shopping.name,
                shoppingDescription: debitData.shopping.description,
                userId: debitData.user.id,
                userName: debitData.user.name,
                amount: this.calculatelOutstandingAmount(debitData.debits),
                delayedDays: this.getTotalDelayedDays(debitData.debits),
                debits: debitData.debits,
                actions: debitData.actions,
                representatives: debitData.representatives
            };
            debits.push(debit);
        }
        return debits;
    }

    private calculatelOutstandingAmount (debits: any[]): number {
        let totalOutstanding = 0;
        for (const debit of debits) {
            if (debit.status !== "Pago") {
                totalOutstanding += debit.amount;
            }
        }
        return totalOutstanding;
    }

    private getTotalDelayedDays (debits: any[]): number {
        let delayedDays = [ -Infinity ];
        for (const debit of debits) {
            if (debit.status !== "Pago") {
                delayedDays.push(debit.delayedDays);
            }
        }
        return Math.max(...delayedDays);
    }
}
