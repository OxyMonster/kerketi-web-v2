import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillNewComponent } from './pay-bill-new.component';

describe('PayBillNewComponent', () => {
  let component: PayBillNewComponent;
  let fixture: ComponentFixture<PayBillNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBillNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
