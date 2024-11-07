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

  addingInput:number = 0

  showAddToPotModal = model()
  @Input() selectedPot = {} as pot 

  closeAddToPotModal() {
    this.showAddToPotModal.set(false)
    this.addingInput = 0
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeAddToPotModal()
    }
  }

  updateAddingInput(e:Event) {
    const searchTarget = e.target as HTMLInputElement
    this.addingInput = Number(searchTarget.value)

  }
}

interface pot {
  name: string,
  target: number,
  total: number,
  theme: string,
}
