import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBankPayFormComponent } from './transfer-bank-pay-form.component';

describe('TransferBankPayFormComponent', () => {
  let component: TransferBankPayFormComponent;
  let fixture: ComponentFixture<TransferBankPayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferBankPayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBankPayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
