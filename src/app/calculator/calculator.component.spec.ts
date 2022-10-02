import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do the sum correctly', () => {
    component.addOperand('1');
    component.addOperator('+');
    component.addOperand('2');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('3');
    component.addOperand('3.2');
    component.addOperator('+');
    component.addOperand('2.8');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('6');
    component.addOperand('3.2');
    component.addOperator('+');
    component.addOperand('-5.1');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('-1.9');
  });

  it('should do the subtraction correctly', () => {
    component.addOperand('1');
    component.addOperator('-');
    component.addOperand('2');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('-1');
    component.addOperand('3.2');
    component.addOperator('-');
    component.addOperand('2.8');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('0.4');
    component.addOperand('3.2');
    component.addOperator('-');
    component.addOperand('-5.1');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('8.3');
  });

  it('should do the multiplication correctly', () => {
    component.addOperand('1');
    component.addOperator('*');
    component.addOperand('2');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('2');
    component.addOperand('3.2');
    component.addOperator('*');
    component.addOperand('2.8');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('8.96');
    component.addOperand('3.2');
    component.addOperator('*');
    component.addOperand('-5.1');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('-16.32');
  });

  it('should do the division correctly', () => {
    component.addOperand('1');
    component.addOperator('/');
    component.addOperand('2');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('0.5');
    component.addOperand('3.2');
    component.addOperator('/');
    component.addOperand('2.8');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('1.14');
    component.addOperand('3.2');
    component.addOperator('/');
    component.addOperand('-5.1');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('-0.63');
    component.addOperand('0');
    component.addOperator('/');
    component.addOperand('0');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('Infinity');
    component.addOperand('7');
    component.addOperator('/');
    component.addOperand('0');
    component.addOperator('=');
    expect(component.currentNumber).toEqual('Infinity');
  });
});
