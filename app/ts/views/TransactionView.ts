import { View } from "../views/View";

class TransactionView extends View<Transaction> {

    constructor(selector: string) {
        super(selector)
    }

    public template(model: TransactionList): string {
    
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

                ${model.transactions.map(transaction => 
                    `
                    <tr>
                        <td>${transaction.dateToString()}</td>
                        <td>${transaction.quantity}</td>
                        <td>${transaction.value}</td>
                        <td>${transaction.volume}</td>
                    </tr>
                    `
                ).join('')}

            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}