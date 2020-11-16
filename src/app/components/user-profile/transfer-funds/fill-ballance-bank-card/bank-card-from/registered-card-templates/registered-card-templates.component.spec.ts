import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCardTemplatesComponent } from './registered-card-templates.component';

describe('RegisteredCardTemplatesComponent', () => {
  let component: RegisteredCardTemplatesComponent;
  let fixture: ComponentFixture<RegisteredCardTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredCardTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCardTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
