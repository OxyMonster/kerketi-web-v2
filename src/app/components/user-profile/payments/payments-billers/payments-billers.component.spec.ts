import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsBillersComponent } from './payments-billers.component';

describe('PaymentsBillersComponent', () => {
  let component: PaymentsBillersComponent;
  let fixture: ComponentFixture<PaymentsBillersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsBillersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsBillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
