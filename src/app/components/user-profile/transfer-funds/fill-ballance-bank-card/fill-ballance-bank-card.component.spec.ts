import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBallanceBankCardComponent } from './fill-ballance-bank-card.component';

describe('FillBallanceBankCardComponent', () => {
  let component: FillBallanceBankCardComponent;
  let fixture: ComponentFixture<FillBallanceBankCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBallanceBankCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBallanceBankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
