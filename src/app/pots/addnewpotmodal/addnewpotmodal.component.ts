import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { model } from '@angular/core';

@Component({
  selector: 'app-addnewpotmodal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './addnewpotmodal.component.html',
  styles: ``
})
export class AddnewpotmodalComponent {

  showNewPotModal = model()

  closeNewPotModal() {
    this.showNewPotModal.set(false)
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeNewPotModal()
    }
  }
}
