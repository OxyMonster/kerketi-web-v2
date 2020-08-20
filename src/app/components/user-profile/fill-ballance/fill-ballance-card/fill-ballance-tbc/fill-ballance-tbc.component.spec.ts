import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBallanceTbcComponent } from './fill-ballance-tbc.component';

describe('FillBallanceTbcComponent', () => {
  let component: FillBallanceTbcComponent;
  let fixture: ComponentFixture<FillBallanceTbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBallanceTbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBallanceTbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
