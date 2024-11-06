import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { model, Input } from '@angular/core';

@Component({
  selector: 'app-deletepotmodal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './deletepotmodal.component.html',
  styles: ``
})
export class DeletepotmodalComponent {

  showDeletePotModal = model()
  @Input() selectedPot = {} as pot 

  closeDeletePotModal() {
    this.showDeletePotModal.set(false)
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeDeletePotModal()
    }
  }

}

interface pot {
  name: string,
  target: number,
  total: number,
  theme: string,
}
