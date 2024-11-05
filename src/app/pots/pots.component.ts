import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DecimalPipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-pots',
  standalone: true,
  imports: [CurrencyPipe, NgStyle, DecimalPipe, NgClass],
  templateUrl: './pots.component.html',
})
export class PotsComponent {
  pots: any = (data.pots as any);

  showNewPotModal = false
  showEditPotModal = false
  showDeletePotModal = false

  selectedPot = ''

  openPotOptions(selectedPot:string) {
    if (this.selectedPot === selectedPot) {
      this.selectedPot = ''
    } else {
      this.selectedPot = selectedPot
    }
  }

  openNewPotModal() {
    this.showNewPotModal = true
  }

  openEditPotModal(selectedPot:string) {
    this.showEditPotModal = true
    this.selectedPot = selectedPot
  }

  openDeletePotModal(selectedPot:string) {
    this.showDeletePotModal = true
    this.selectedPot = selectedPot
  }
}
