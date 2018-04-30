class TransactionController {
    constructor() {
        this._transactionList = new TransactionList();
        this._transactionView = new TransactionView('#transaction-view');
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this._form = document.querySelector('.form');
    }
    add(event) {
        event.preventDefault();
        let transaction = new Transaction(new Date(this.formatDate()), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        this._transactionList.add(transaction);
        this._transactionView.update(this._transactionList);
        this._clearAndFocus();
    }
    _clearAndFocus() {
        this._form.reset();
        this._inputDate.focus();
    }
    formatDate() {
        return this._inputDate.value.replace(/-/g, ',');
    }
}
