export default interface ExpenseRepository {
    findAll (): Promise<Output[]>;
}

type Output = {
    id: string,
    shoppingCode: string,
    storeCode: string,
    type: string,
    amount: number,
    dueDate: Date
};
