import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBillersChildComponent } from './payment-billers-child.component';

describe('PaymentBillersChildComponent', () => {
  let component: PaymentBillersChildComponent;
  let fixture: ComponentFixture<PaymentBillersChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBillersChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBillersChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
