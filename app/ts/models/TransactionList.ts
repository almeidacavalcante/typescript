class TransactionList {

    private _transactions: Transaction[] = [];

    public add(transaction: Transaction): void{
        this._transactions.push(transaction);
    }

    public get transactions(): Transaction[]{
        return [].concat(this._transactions);
    }

}