import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBallancePaygeComponent } from './fill-ballance-payge.component';

describe('FillBallancePaygeComponent', () => {
  let component: FillBallancePaygeComponent;
  let fixture: ComponentFixture<FillBallancePaygeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBallancePaygeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBallancePaygeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
