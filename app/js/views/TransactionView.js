class TransactionView {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        console.log(this.template(model));
        this._element.innerHTML = this.template(model);
    }
    template(model) {
        return `

        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>

                ${model.transactions.map(transaction => `
                    <tr>
                        <td>${transaction.dateToString()}</td>
                        <td>${transaction.quantity}</td>
                        <td>${transaction.value}</td>
                        <td>${transaction.volume}</td>
                    </tr>
                    `).join('')}

            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}
