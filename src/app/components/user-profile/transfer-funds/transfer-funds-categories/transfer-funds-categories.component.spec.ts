import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFundsCategoriesComponent } from './transfer-funds-categories.component';

describe('TransferFundsCategoriesComponent', () => {
  let component: TransferFundsCategoriesComponent;
  let fixture: ComponentFixture<TransferFundsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFundsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
