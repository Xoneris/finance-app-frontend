import { NgClass } from '@angular/common';
import { Component, model, Input } from '@angular/core';

@Component({
  selector: 'app-deletebudgetmodal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './deletebudgetmodal.component.html',
})
export class DeletebudgetmodalComponent {

  showDeleteModal = model()
  @Input() selectedBudget = '' 

  closeDeleteModal() {
    this.showDeleteModal.set(false)
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeDeleteModal()
    }
  }

}
