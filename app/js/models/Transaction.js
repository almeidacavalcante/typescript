class Transaction {
    constructor(_date, _quantity, _value) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
    }
    get date() {
        return this._date;
    }
    dateToString() {
        return `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`;
    }
    get quantity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._quantity * this._value;
    }
}
