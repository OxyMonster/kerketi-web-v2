import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrencyRateComponent } from './exchange-currency-rate.component';

describe('ExchangeCurrencyRateComponent', () => {
  let component: ExchangeCurrencyRateComponent;
  let fixture: ComponentFixture<ExchangeCurrencyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCurrencyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
