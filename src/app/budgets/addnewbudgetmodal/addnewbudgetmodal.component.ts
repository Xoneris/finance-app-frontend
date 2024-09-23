import { NgClass } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-addnewbudgetmodal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './addnewbudgetmodal.component.html',
  styleUrl: './addnewbudgetmodal.component.css'
})
export class AddnewbudgetmodalComponent {

  showNewBudgetModal = model()

  closeNewBudgetModal() {
    // this.showNewBudgetModal = false
    this.showNewBudgetModal.set(false)
    console.log("close")
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeNewBudgetModal()
    }
  }

}
