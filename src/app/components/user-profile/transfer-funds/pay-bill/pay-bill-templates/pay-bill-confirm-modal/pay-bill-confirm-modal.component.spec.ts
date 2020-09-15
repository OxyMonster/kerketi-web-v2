import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillConfirmModalComponent } from './pay-bill-confirm-modal.component';

describe('PayBillConfirmModalComponent', () => {
  let component: PayBillConfirmModalComponent;
  let fixture: ComponentFixture<PayBillConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBillConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
