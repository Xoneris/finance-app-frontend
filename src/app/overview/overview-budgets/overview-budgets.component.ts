import { Component } from '@angular/core';
import * as data from '../../../../data.json'
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-overview-budgets',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './overview-budgets.component.html',
  styles: ``
})
export class OverviewBudgetsComponent {
  budgets: any = (data.budgets as any);

  test = "bg-[#277C78]"
}
