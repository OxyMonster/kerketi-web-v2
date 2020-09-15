import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillMobileBallanceComponent } from './fill-mobile-ballance.component';

describe('FillMobileBallanceComponent', () => {
  let component: FillMobileBallanceComponent;
  let fixture: ComponentFixture<FillMobileBallanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillMobileBallanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillMobileBallanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
