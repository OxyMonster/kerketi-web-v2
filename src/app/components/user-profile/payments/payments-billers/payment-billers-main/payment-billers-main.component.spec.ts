import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBillersMainComponent } from './payment-billers-main.component';

describe('PaymentBillersMainComponent', () => {
  let component: PaymentBillersMainComponent;
  let fixture: ComponentFixture<PaymentBillersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBillersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBillersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
