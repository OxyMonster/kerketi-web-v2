import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsBillersModalComponent } from './payments-billers-modal.component';

describe('PaymentsBillersModalComponent', () => {
  let component: PaymentsBillersModalComponent;
  let fixture: ComponentFixture<PaymentsBillersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsBillersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsBillersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
