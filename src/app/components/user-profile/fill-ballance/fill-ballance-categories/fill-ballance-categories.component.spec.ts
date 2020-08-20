import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBallanceCategoriesComponent } from './fill-ballance-categories.component';

describe('FillBallanceCategoriesComponent', () => {
  let component: FillBallanceCategoriesComponent;
  let fixture: ComponentFixture<FillBallanceCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBallanceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBallanceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
