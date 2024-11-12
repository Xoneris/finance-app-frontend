import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgClass, DatePipe, CurrencyPipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  transactions: transaction[] = (data.transactions);
  searchTerm: string = ""
  sortBy: string = ""
  category: string = ""
  showCategorieToggle: boolean = false
  showSortBy: boolean = false

  temp = Math.floor(this.transactions.length / 10) + 1 
  pages: number[] = Array(this.temp).fill(0).map((x,i)=>i);

  pageination: number[] = [0,10]

  filteredTransactions() {
    let filteredTransactions = this.transactions

    switch(this.sortBy) {
      case "latest":
        filteredTransactions = filteredTransactions.sort(function(a:transaction,b:transaction){
          if (a.date > b.date){
            return -1 
          } else if (a.date < b.date){
            return 1
          }
          return 0
        })
        break
      case "oldest":
        filteredTransactions = filteredTransactions.sort(function(a:transaction,b:transaction){
          if (a.date < b.date){
            return -1 
          } else if (a.date > b.date){
            return 1
          }
          return 0
        })
        break
      case "a-to-z":
        filteredTransactions = filteredTransactions.sort(function(a:transaction,b:transaction){
          if (a.name < b.name){
            return -1 
          } else if (a.name > b.name){
            return 1
          }
          return 0
        })
        break
      case "z-to-a":
        filteredTransactions = filteredTransactions.sort(function(a:transaction,b:transaction){
          if (a.name > b.name){
            return -1 
          } else if (a.name < b.name){
            return 1
          }
          return 0
        })
        break
      case "highest":
        filteredTransactions = filteredTransactions.sort(function(a:transaction,b:transaction){
          if (a.amount < b.amount){
            return -1 
          } else if (a.amount > b.amount){
            return 1
          }
          return 0
        })
        break
      case "lowest":
        filteredTransactions = filteredTransactions.sort(function(a:transaction,b:transaction){
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

    if (this.category !== "") {
      filteredTransactions = filteredTransactions.filter((transaction:transaction) => transaction.category === this.category)
    }

    if (this.searchTerm !== "") {
      filteredTransactions = filteredTransactions.filter((transaction:transaction) => transaction.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
    this.pages = Array(Math.floor(filteredTransactions.length / 10) + 1).fill(0).map((x,i)=>i)
    return filteredTransactions
  }

  updateSortBy(e:Event) {
    const sortTarget = e.target as HTMLInputElement
    this.sortBy = sortTarget.value
  }

  updateSortByMobile(sortName:string) {
    this.sortBy = sortName
  }

  updateCategory(e:Event) {
    const categoryTarget = e.target as HTMLInputElement
    this.category = categoryTarget.value
  }

  updateCategoryMobile(categoryName:string) {
    this.category = categoryName
  }

  updateSearchTerm(e:Event) {
    const searchTarget = e.target as HTMLInputElement
    this.searchTerm = searchTarget.value
    if (this.pageination[0] !== 0 && this.pageination[1] !== 10) {
      this.pageination[0] = 0;
      this.pageination[1] = 10;
    }
  }

  toggleSortBy() {
    this.showSortBy = !this.showSortBy
    this.showCategorieToggle = false
  }

  toggleCategories() {
    this.showCategorieToggle = !this.showCategorieToggle
    this.showSortBy = false
  }

  pageinationButton(start:number, end:number) {
    this.pageination[0] = start;
    this.pageination[1] = end;
  }

  pageinationBack() {
    if (this.pageination[0] !== 0) {
      this.pageination[0] = this.pageination[0] - 10
      this.pageination[1] = this.pageination[1] - 10
    }
  }

  pageinationNext() {
    if (this.pageination[1] !== (this.temp * 10) ) {
      this.pageination[0] = this.pageination[0] + 10
      this.pageination[1] = this.pageination[1] + 10
    }
  }
}

interface transaction {
  avatar: string,
  name: string,
  category: string,
  date: string,
  amount: number,
  recurring: boolean,
}
