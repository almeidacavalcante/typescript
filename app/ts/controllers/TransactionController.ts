class TransactionController {

    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _form: HTMLFormElement;
    private _transactionList = new TransactionList();
    private _transactionView = new TransactionView('#transaction-view');

    constructor(){
        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');
        this._form = <HTMLFormElement>document.querySelector('.form');
    }
    
    public add(event: Event){
        
        event.preventDefault();

        let transaction = new Transaction(
            new Date(this.formatDate()),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        )

        this._transactionList.add(transaction);
        this._transactionView.update(this._transactionList);

        this._clearAndFocus();
    }

    private _clearAndFocus(){
        this._form.reset();
        this._inputDate.focus();
    }

    private formatDate(){
        return this._inputDate.value.replace(/-/g, ',')
    }
    
}