import { CurrencyPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Input, model } from '@angular/core';

@Component({
  selector: 'app-withdrawfrompotmodal',
  standalone: true,
  imports: [NgClass,CurrencyPipe,DecimalPipe],
  templateUrl: './withdrawfrompotmodal.component.html',
  styles: ``
})
export class WithdrawfrompotmodalComponent {
  showWithdrawFromPotModal = model()
  @Input() selectedPot = {} as pot 

  closeWithdrawFromPotModal() {
    this.showWithdrawFromPotModal.set(false)
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeWithdrawFromPotModal()
    }
  }
}

interface pot {
  name: string,
  target: number,
  total: number,
  theme: string,
}
