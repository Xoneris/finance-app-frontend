import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgFor, NgClass, DatePipe, CurrencyPipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  

  transactions: transaction[] = (data.transactions);
  searchTerm: string = ""
  sortBy: string = ""

  temp = Math.floor(this.transactions.length / 10) + 1 
  pages: number[] = Array(this.temp).fill(0).map((x,i)=>i);

  pageination: number[] = [0,10]

  filteredTransactions() {

    let filteredTransactions = this.transactions

    // switch(this.sortBy) {
    //   case "latest":
    //     filteredTransactions = filteredTransactions.sort(function(a:any,b:any){
    //       if (a.name < b.name){
    //         return -1 
    //       } else if (a.name > b.name){
    //         return 1
    //       }
    //       return 0
    //     })
    //     break
    //   case "oldest":
    //     filteredTransactions = filteredTransactions.filter((transaction:any) => )
    //     break
    //   case "a-to-z":
    //     filteredTransactions = filteredTransactions.filter((transaction:any) => )
    //     break
    //   case "z-to-a":
    //     filteredTransactions = filteredTransactions.filter((transaction:any) => )
    //     break
    //   case "highest":
    //     filteredTransactions = filteredTransactions.filter((transaction:any) => )
    //     break
    //   case "lowest":
    // }

    if (this.searchTerm !== "") {
      filteredTransactions = this.transactions.filter((transaction:any) => transaction.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
    this.pages = Array(Math.floor(filteredTransactions.length / 10) + 1).fill(0).map((x,i)=>i)
    return filteredTransactions
  }

  updateSortBy(e:Event) {
    const sortTarget = e.target as HTMLInputElement
    this.sortBy = sortTarget.value
  }

  updateSearchTerm(e:Event) {
    const searchTarget = e.target as HTMLInputElement
    this.searchTerm = searchTarget.value
    if (this.pageination[0] !== 0 && this.pageination[1] !== 10) {
      this.pageination[0] = 0;
      this.pageination[1] = 10;
    }
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
