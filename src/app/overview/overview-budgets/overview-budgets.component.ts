import { Component } from '@angular/core';
import * as data from '../../../../data.json'
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview-budgets',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './overview-budgets.component.html',
  styles: ``
})
export class OverviewBudgetsComponent {
  budgets: any = (data.budgets as any);

  test = "bg-[#277C78]"
}
