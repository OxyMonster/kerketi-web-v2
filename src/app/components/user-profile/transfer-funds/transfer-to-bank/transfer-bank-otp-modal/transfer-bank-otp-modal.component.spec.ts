import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBankOtpModalComponent } from './transfer-bank-otp-modal.component';

describe('TransferBankOtpModalComponent', () => {
  let component: TransferBankOtpModalComponent;
  let fixture: ComponentFixture<TransferBankOtpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferBankOtpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBankOtpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
