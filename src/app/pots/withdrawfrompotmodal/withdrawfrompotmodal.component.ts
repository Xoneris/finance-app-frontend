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

  withdrawlInput:number = 0
  withdrawError:string = ""

  showWithdrawFromPotModal = model()
  @Input() selectedPot = {} as pot 

  closeWithdrawFromPotModal() {
    this.showWithdrawFromPotModal.set(false)
    this.withdrawlInput = 0
    this.withdrawError = ""
  }

  closeOnOutsideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (targetElement.classList.contains('fixed')) {
      this.closeWithdrawFromPotModal()
    }
  }

  updateWithdrawInput(e:Event) {
    const searchTarget = e.target as HTMLInputElement
    if(this.selectedPot.total - Number(searchTarget.value) >= 0) {
      this.withdrawlInput = Number(searchTarget.value)
      this.withdrawError = ""
    } else {
      this.withdrawError = "Cannot withdraw that much"
    }
  }

}

interface pot {
  name: string,
  target: number,
  total: number,
  theme: string,
}
