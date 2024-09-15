import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgFor, NgClass, DatePipe, CurrencyPipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  transactions: any = (data.transactions);
  temp = Math.floor(this.transactions.length / 10) + 1 
  pages: number[] = []
  constructor() {
    this.pages = Array(this.temp).fill(0).map((x,i)=>i);
  }

  pageination: number[] = [0,10]

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
