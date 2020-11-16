import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCardFromComponent } from './bank-card-from.component';

describe('BankCardFromComponent', () => {
  let component: BankCardFromComponent;
  let fixture: ComponentFixture<BankCardFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankCardFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCardFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
