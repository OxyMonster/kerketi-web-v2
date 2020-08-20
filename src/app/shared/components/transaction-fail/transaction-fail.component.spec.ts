import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFailComponent } from './transaction-fail.component';

describe('TransactionFailComponent', () => {
  let component: TransactionFailComponent;
  let fixture: ComponentFixture<TransactionFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
