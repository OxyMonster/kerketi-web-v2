import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCashingComponent } from './fund-cashing.component';

describe('FundCashingComponent', () => {
  let component: FundCashingComponent;
  let fixture: ComponentFixture<FundCashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
