import { Component } from '@angular/core';
import * as data from '../../../../data.json'
import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-overview-transactions',
  standalone: true,
  imports: [NgFor, DatePipe, CurrencyPipe, NgClass],
  templateUrl: './overview-transactions.component.html',
  styles: ``
})
export class OverviewTransactionsComponent {
  transactions = data.transactions;
  

}