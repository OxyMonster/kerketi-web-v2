import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobileToTemplatesComponent } from './add-mobile-to-templates.component';

describe('AddMobileToTemplatesComponent', () => {
  let component: AddMobileToTemplatesComponent;
  let fixture: ComponentFixture<AddMobileToTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobileToTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobileToTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
