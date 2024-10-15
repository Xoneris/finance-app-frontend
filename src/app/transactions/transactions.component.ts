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

  transactions: any = (data.transactions);
  searchTerm: string = ""

  temp = Math.floor(this.transactions.length / 10) + 1 
  pages: number[] = Array(this.temp).fill(0).map((x,i)=>i);

  // constructor() {
  //   this.pages = Array(this.temp).fill(0).map((x,i)=>i);
  // }

  pageination: number[] = [0,10]

  filteredTransactionsBySearch() {
    const filteredTransactions = this.transactions.filter((transaction:any) => transaction.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.pages = Array(Math.floor(filteredTransactions.length / 10) + 1).fill(0).map((x,i)=>i)
    return filteredTransactions
  }

  updateSearchTerm(e:Event) {
    const searchTarget = e.target as HTMLInputElement
    this.searchTerm = searchTarget.value
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
