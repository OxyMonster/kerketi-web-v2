import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfHeaderComponent } from './user-prof-header.component';

describe('UserProfHeaderComponent', () => {
  let component: UserProfHeaderComponent;
  let fixture: ComponentFixture<UserProfHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
