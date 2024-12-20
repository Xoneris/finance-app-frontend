import { Component } from '@angular/core';
import * as data from '../../../data.json'
import { CurrencyPipe, DecimalPipe, NgClass, NgStyle } from '@angular/common';

import { AddnewpotmodalComponent } from './addnewpotmodal/addnewpotmodal.component';
import { DeletepotmodalComponent } from './deletepotmodal/deletepotmodal.component';
import { EditpotmodalComponent } from './editpotmodal/editpotmodal.component';
import { WithdrawfrompotmodalComponent } from './withdrawfrompotmodal/withdrawfrompotmodal.component';
import { AddtopotmodalComponent } from './addtopotmodal/addtopotmodal.component';

@Component({
  selector: 'app-pots',
  standalone: true,
  imports: [CurrencyPipe, NgStyle, DecimalPipe, NgClass, AddnewpotmodalComponent, DeletepotmodalComponent, EditpotmodalComponent, WithdrawfrompotmodalComponent, AddtopotmodalComponent],
  templateUrl: './pots.component.html',
})
export class PotsComponent {
  pots: pot[] = (data.pots as pot[]);

  showNewPotModal = false
  showEditPotModal = false
  showDeletePotModal = false
  showWithdrawFromPotModal = false
  showAddToPotModal = false

  potIndex:number|undefined
  selectedPot = {} as pot

  openPotOptions(index:number) {
    if(this.potIndex === index) {
      this.potIndex = undefined
    } else {
    this.potIndex = index
    }
  }

  openNewPotModal() {
    this.showNewPotModal = true
  }

  openEditPotModal(selectedPot:pot) {
    this.showEditPotModal = true
    this.selectedPot = selectedPot
    this.potIndex = undefined
  }

  openDeletePotModal(selectedPot:pot) {
    this.showDeletePotModal = true
    this.selectedPot = selectedPot
    this.potIndex = undefined
  }

  openWithdrawFromPotModal(selectedPot:pot) {
    this.showWithdrawFromPotModal = true
    this.selectedPot = selectedPot
  }

  openAddToPotModal(selectedPot:pot) {
    this.showAddToPotModal = true
    this.selectedPot = selectedPot
  }
}

interface pot {
  name: string,
  target: number,
  total: number,
  theme: string,
}