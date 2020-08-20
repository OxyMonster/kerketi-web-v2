import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionProcessingComponent } from './transaction-processing.component';

describe('TransactionProcessingComponent', () => {
  let component: TransactionProcessingComponent;
  let fixture: ComponentFixture<TransactionProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
