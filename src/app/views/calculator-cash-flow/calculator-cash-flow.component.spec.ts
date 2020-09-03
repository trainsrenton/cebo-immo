import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorCashFlowComponent } from './calculator-cash-flow.component';

describe('CalculatorCashFlowComponent', () => {
  let component: CalculatorCashFlowComponent;
  let fixture: ComponentFixture<CalculatorCashFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorCashFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorCashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
