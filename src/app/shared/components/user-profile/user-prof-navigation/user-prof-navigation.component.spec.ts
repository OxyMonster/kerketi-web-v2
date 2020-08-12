import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfNavigationComponent } from './user-prof-navigation.component';

describe('UserProfNavigationComponent', () => {
  let component: UserProfNavigationComponent;
  let fixture: ComponentFixture<UserProfNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
