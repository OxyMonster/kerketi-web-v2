import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsCategoriesComponent } from './payments-categories.component';

describe('PaymentsCategoriesComponent', () => {
  let component: PaymentsCategoriesComponent;
  let fixture: ComponentFixture<PaymentsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
