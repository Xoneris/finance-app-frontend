import { Component } from '@angular/core';
import { SummaryBlockComponent } from './summary-block/summary-block.component';
import { OverviewPotsComponent } from './overview-pots/overview-pots.component';
import { OverviewTransactionsComponent } from "./overview-transactions/overview-transactions.component";
import { OverviewRecurringBillsComponent } from './overview-recurring-bills/overview-recurring-bills.component';
import { OverviewBudgetsComponent } from './overview-budgets/overview-budgets.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SummaryBlockComponent, OverviewPotsComponent, OverviewTransactionsComponent, OverviewBudgetsComponent, OverviewRecurringBillsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
