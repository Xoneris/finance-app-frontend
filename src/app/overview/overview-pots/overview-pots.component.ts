import { Component } from '@angular/core';
import * as data from '../../../../data.json'
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview-pots',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './overview-pots.component.html',
  styleUrl: './overview-pots.component.css'
})
export class OverviewPotsComponent {
  pots: any = (data.pots as any);

  coolFunction(color: string) {

    return "bg-["+color+"]";

  }

}
