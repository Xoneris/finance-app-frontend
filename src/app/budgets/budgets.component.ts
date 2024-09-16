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
    return Number(totalSpent.toString().replace("-",""))
  }

  getRemaining(totalSpent:number, budgetTotal:number) {
    return budgetTotal - totalSpent > 0 ? budgetTotal - totalSpent : 0
  }

  getTransactions(budgetCategory:string) {
    return this.transactions.filter((transaction) => transaction.category === budgetCategory).slice(0,3)
  }
}