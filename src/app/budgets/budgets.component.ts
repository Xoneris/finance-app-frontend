import { Component, signal } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { AddnewbudgetmodalComponent } from './addnewbudgetmodal/addnewbudgetmodal.component';
import { EditbudgetmodalComponent } from './editbudgetmodal/editbudgetmodal.component';
import { DeletebudgetmodalComponent } from './deletebudgetmodal/deletebudgetmodal.component';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, AddnewbudgetmodalComponent, EditbudgetmodalComponent, DeletebudgetmodalComponent, NgClass],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.css'
})
export class BudgetsComponent {
  budgets = data.budgets
  transactions = data.transactions

  showNewBudgetModal = false
  showEditBudgetModal = false
  showDeleteBudgetModal = false

  selectedBudget = ''

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

  openBudgetOptions(selectedBudget:string) {
    if (this.selectedBudget === selectedBudget) {
      this.selectedBudget = ''
    } else {
      this.selectedBudget = selectedBudget
    }
    
  }

  openNewBudgetModal() {
    this.showNewBudgetModal = true
  }

  openEditBudgetModal(selectedBudget:string) {
    this.showEditBudgetModal = true
    this.selectedBudget = selectedBudget
  }

  openDeleteBudgetModal(selectedBudget:string) {
    this.showDeleteBudgetModal = true
    this.selectedBudget = selectedBudget
  }
  
}