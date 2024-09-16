import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.css'
})
export class BudgetsComponent {

  budgets = data.budgets
  transactions = data.transactions


  getTotalSpent(budgetCategory:string) {
    const transactionsOfCategory = this.transactions.filter((transaction) => transaction.category === budgetCategory)
    const totalSpent = transactionsOfCategory.reduce((total, transaction) => total + transaction.amount, 0 )
    return totalSpent
  }

  getRemaining(budgetCategory:string, budgetTotal:number) {
    const transactionsOfCategory = this.transactions.filter((transaction) => transaction.category === budgetCategory)
    const totalSpent = transactionsOfCategory.reduce((total, transaction) => total + transaction.amount, 0 )
    return budgetTotal + totalSpent 
  }

  getTransactions(budgetCategory:string) {
    return this.transactions.filter((transaction) => transaction.category === budgetCategory).slice(0,3)
  }

}

const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.25, quantity: 5 },
  { name: 'Orange', price: 0.3, quantity: 8 }
];

const totalCost = products.reduce((accumulator, product) => {
  return accumulator + product.price * product.quantity;
}, 0);

console.log(totalCost);
