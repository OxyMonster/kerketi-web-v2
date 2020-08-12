import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBallanceComponent } from './fill-ballance.component';

describe('FillBallanceComponent', () => {
  let component: FillBallanceComponent;
  let fixture: ComponentFixture<FillBallanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBallanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBallanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
