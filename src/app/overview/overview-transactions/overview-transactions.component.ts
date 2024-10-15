import { Component } from '@angular/core';
import * as data from '../../../../data.json'
import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview-transactions',
  standalone: true,
  imports: [NgFor, DatePipe, CurrencyPipe, NgClass, RouterLink],
  templateUrl: './overview-transactions.component.html',
  styles: ``
})
export class OverviewTransactionsComponent {
  transactions = data.transactions;
  

}