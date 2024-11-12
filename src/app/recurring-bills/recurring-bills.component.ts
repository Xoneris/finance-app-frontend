import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-recurring-bills',
  standalone: true,
  imports: [NgClass, CurrencyPipe, DatePipe],
  templateUrl: './recurring-bills.component.html',
  styleUrl: './recurring-bills.component.css'
})
export class RecurringBillsComponent {
  recurringBills: any = (data.transactions.filter(bill => bill.recurring === true) as any);
  sortBy: string = ""
  searchTerm: string = ""
  showSortBy: boolean = false

  updateSortBy(e:Event) {
    const sortTarget = e.target as HTMLInputElement
    this.sortBy = sortTarget.value
  }

  updateSortByMobile(sortName:string) {
    this.sortBy = sortName
  }

  updateSearchTerm(e:Event) {
    const searchTarget = e.target as HTMLInputElement
    this.searchTerm = searchTarget.value
  }

  toggleSortBy() {
    this.showSortBy = !this.showSortBy
  }

  filteredRecurringBills() {
    let filteredRecurringBills = this.recurringBills

    switch(this.sortBy) {
      case "latest":
        filteredRecurringBills = filteredRecurringBills.sort(function(a:recurringBill,b:recurringBill){
          if (a.date > b.date){
            return -1 
          } else if (a.date < b.date){
            return 1
          }
          return 0
        })
        break
      case "oldest":
        filteredRecurringBills = filteredRecurringBills.sort(function(a:recurringBill,b:recurringBill){
          if (a.date < b.date){
            return -1 
          } else if (a.date > b.date){
            return 1
          }
          return 0
        })
        break
      case "a-to-z":
        filteredRecurringBills = filteredRecurringBills.sort(function(a:recurringBill,b:recurringBill){
          if (a.name < b.name){
            return -1 
          } else if (a.name > b.name){
            return 1
          }
          return 0
        })
        break
      case "z-to-a":
        filteredRecurringBills = filteredRecurringBills.sort(function(a:recurringBill,b:recurringBill){
          if (a.name > b.name){
            return -1 
          } else if (a.name < b.name){
            return 1
          }
          return 0
        })
        break
      case "highest":
        filteredRecurringBills = filteredRecurringBills.sort(function(a:recurringBill,b:recurringBill){
          if (a.amount < b.amount){
            return -1 
          } else if (a.amount > b.amount){
            return 1
          }
          return 0
        })
        break
      case "lowest":
        filteredRecurringBills = filteredRecurringBills.sort(function(a:recurringBill,b:recurringBill){
          if (a.amount > b.amount){
            return -1 
          } else if (a.amount < b.amount){
            return 1
          }
          return 0
        })
        break
      default:
        break
    }
    if (this.searchTerm !== "") {
      filteredRecurringBills = filteredRecurringBills.filter((transaction:recurringBill) => transaction.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
    return filteredRecurringBills
  }
}

interface recurringBill {
  avatar: string,
  name: string,
  category: string,
  date: string,
  amount: number,
  recurring: boolean,
}
