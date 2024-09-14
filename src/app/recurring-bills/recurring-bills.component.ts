import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-recurring-bills',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './recurring-bills.component.html',
  styleUrl: './recurring-bills.component.css'
})
export class RecurringBillsComponent {
  recurringBills: any = (data.transactions.filter(bill => bill.recurring === true) as any);
}
