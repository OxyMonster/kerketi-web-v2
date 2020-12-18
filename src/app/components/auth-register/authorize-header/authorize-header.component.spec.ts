import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeHeaderComponent } from './authorize-header.component';

describe('AuthorizeHeaderComponent', () => {
  let component: AuthorizeHeaderComponent;
  let fixture: ComponentFixture<AuthorizeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
