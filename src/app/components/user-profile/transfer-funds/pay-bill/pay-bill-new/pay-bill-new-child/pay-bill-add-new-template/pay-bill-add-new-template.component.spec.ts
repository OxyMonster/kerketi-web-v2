import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillAddNewTemplateComponent } from './pay-bill-add-new-template.component';

describe('PayBillAddNewTemplateComponent', () => {
  let component: PayBillAddNewTemplateComponent;
  let fixture: ComponentFixture<PayBillAddNewTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBillAddNewTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillAddNewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
