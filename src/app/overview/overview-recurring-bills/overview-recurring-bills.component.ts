import { Component } from '@angular/core';
import * as data from '../../../../data.json'

@Component({
  selector: 'app-overview-recurring-bills',
  standalone: true,
  imports: [],
  templateUrl: './overview-recurring-bills.component.html',
  styles: ``
})
export class OverviewRecurringBillsComponent {
  transactions: any = (data.transactions as any);
  paidBills: number = 0

  // caculateSums() {
    
  //   for(let i=0; i < this.transactions.length; i++){

  //   }
  // }
  

}
