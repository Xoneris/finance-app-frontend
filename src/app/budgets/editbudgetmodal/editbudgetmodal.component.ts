import { NgClass } from '@angular/common';
import { Component, model, Input } from '@angular/core';
import * as data from '../../../../data.json'

@Component({
  selector: 'app-editbudgetmodal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './editbudgetmodal.component.html',
})
export class EditbudgetmodalComponent {

  budgets = data.budgets
  showEditBudgetModal = model()
  @Input() selectedBudget = '' 
  currentBudget = this.budgets.filter((budget) => budget.category === this.selectedBudget)
  

  closeEditBudgetModal() {
    this.showEditBudgetModal.set(false)
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeEditBudgetModal()
    }
  }

}
