import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBallanceCardComponent } from './fill-ballance-card.component';

describe('FillBallanceCardComponent', () => {
  let component: FillBallanceCardComponent;
  let fixture: ComponentFixture<FillBallanceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBallanceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBallanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
