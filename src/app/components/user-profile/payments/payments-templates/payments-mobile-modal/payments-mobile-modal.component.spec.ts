import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsMobileModalComponent } from './payments-mobile-modal.component';

describe('PaymentsMobileModalComponent', () => {
  let component: PaymentsMobileModalComponent;
  let fixture: ComponentFixture<PaymentsMobileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsMobileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsMobileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
