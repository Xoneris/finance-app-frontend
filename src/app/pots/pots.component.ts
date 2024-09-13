import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DecimalPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-pots',
  standalone: true,
  imports: [CurrencyPipe, NgStyle, DecimalPipe],
  templateUrl: './pots.component.html',
})
export class PotsComponent {
  pots: any = (data.pots as any);
}
