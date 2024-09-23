import { Component, signal } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AddnewbudgetmodalComponent } from './addnewbudgetmodal/addnewbudgetmodal.component';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, AddnewbudgetmodalComponent],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.css'
})
export class BudgetsComponent {
  budgets = data.budgets
  transactions = data.transactions

  showNewBudgetModal = false
  showEditBudgetModal = false

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

  openNewBudgetModal() {
    this.showNewBudgetModal = true
    console.log("open")
  }

  closeNewBudgetModal() {
    this.showNewBudgetModal = false
  }

  openEditBudgetModal() {
    this.showEditBudgetModal = true
  }

  closeEditBudgetModal() {
    this.showEditBudgetModal = false
  }
}