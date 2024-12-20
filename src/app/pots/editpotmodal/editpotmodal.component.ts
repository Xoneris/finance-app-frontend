import { Component } from '@angular/core';
import { model, Input } from '@angular/core';
import * as data from '../../../../data.json'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-editpotmodal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './editpotmodal.component.html',
  styles: ``
})
export class EditpotmodalComponent {

  pots = data.pots
  showEditPotModal = model()
  @Input() selectedPot = {} as pot

  closeEditPotModal() {
    this.showEditPotModal.set(false)
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeEditPotModal()
    }
  }
}

interface pot {
  name: string,
  target: number,
  total: number,
  theme: string,
}
