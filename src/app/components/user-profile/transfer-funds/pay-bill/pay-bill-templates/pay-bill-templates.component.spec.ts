import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillTemplatesComponent } from './pay-bill-templates.component';

describe('PayBillTemplatesComponent', () => {
  let component: PayBillTemplatesComponent;
  let fixture: ComponentFixture<PayBillTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBillTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
