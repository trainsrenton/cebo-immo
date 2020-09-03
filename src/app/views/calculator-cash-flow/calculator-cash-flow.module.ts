import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorCashFlowComponent } from './calculator-cash-flow.component';

@NgModule({
  declarations: [CalculatorCashFlowComponent],
  imports: [
    CommonModule
  ],
  exports:[CalculatorCashFlowComponent]
})
export class CalculatorCashFlowModule { }
