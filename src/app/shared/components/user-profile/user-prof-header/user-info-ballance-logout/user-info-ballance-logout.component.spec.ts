import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoBallanceLogoutComponent } from './user-info-ballance-logout.component';

describe('UserInfoBallanceLogoutComponent', () => {
  let component: UserInfoBallanceLogoutComponent;
  let fixture: ComponentFixture<UserInfoBallanceLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoBallanceLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoBallanceLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
