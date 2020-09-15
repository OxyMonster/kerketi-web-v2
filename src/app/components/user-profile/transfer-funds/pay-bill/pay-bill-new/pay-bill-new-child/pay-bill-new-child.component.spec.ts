import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillNewChildComponent } from './pay-bill-new-child.component';

describe('PayBillNewChildComponent', () => {
  let component: PayBillNewChildComponent;
  let fixture: ComponentFixture<PayBillNewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBillNewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillNewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
