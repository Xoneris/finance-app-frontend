import { Component } from '@angular/core';
import { SummaryBlockComponent } from './summary-block/summary-block.component';
import { OverviewPotsComponent } from './overview-pots/overview-pots.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SummaryBlockComponent, OverviewPotsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
