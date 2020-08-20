import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFontawsBillersComponent } from './icons-fontaws-billers.component';

describe('IconsFontawsBillersComponent', () => {
  let component: IconsFontawsBillersComponent;
  let fixture: ComponentFixture<IconsFontawsBillersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsFontawsBillersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsFontawsBillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
