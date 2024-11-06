import { CurrencyPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { model,Input } from '@angular/core';

@Component({
  selector: 'app-addtopotmodal',
  standalone: true,
  imports: [NgClass,CurrencyPipe,DecimalPipe],
  templateUrl: './addtopotmodal.component.html',
  styles: ``
})
export class AddtopotmodalComponent {

  showAddToPotModal = model()
  @Input() selectedPot = {} as pot 

  closeAddToPotModal() {
    this.showAddToPotModal.set(false)
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeAddToPotModal()
    }
  }
}

interface pot {
  name: string,
  target: number,
  total: number,
  theme: string,
}
